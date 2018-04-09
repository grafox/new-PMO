import { Component, OnInit , Input, Output } from '@angular/core';
import { Router} from '@angular/router'
import { ItemService } from '../services/item.service';
import { Item } from '../models/Item'; 
import { FormsModule } from '@angular/forms';
import { FateModule } from 'fate-editor';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  public router: Router;

  item: Item = {
    title: '',
    content:'',
    subContent:'',
    creatAt: new Date(),
    type:'',
    image:'https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/logo%2Flogo.jpg?alt=media&token=44f660ec-d7f3-496f-9966-1f8f54ddc6ff',
    thumbnail:'https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/logo%2Fthumnail_logo.jpg?alt=media&token=1c851838-d46b-4c73-9f70-e5a0374a226a'
  }
    // Main task 
    task: AngularFireUploadTask;
    // Progress monitoring
    percentage: Observable<number>;
    snapshot: Observable<any>;
    // Download URL
    downloadURL: Observable<string>| null;
    // State for dropzone CSS toggling
    isHovering: boolean;
  
  constructor(private itemService: ItemService,private storage: AngularFireStorage,private db: AngularFirestore) { }

  ngOnInit() {
    
  }

  onSubmit(){
    if(this.item.title != '' && this.item.content != ''){
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.content = '';
      this.item.subContent='';
//      this.item.image='https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/logo%2Flogo.jpg?alt=media&token=44f660ec-d7f3-496f-9966-1f8f54ddc6ff';
//      this.item.thumbnail='https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/logo%2Fthumnail_logo.jpg?alt=media&token=1c851838-d46b-4c73-9f70-e5a0374a226a';
      this.item.image='';
      this.item.thumbnail='';
      this.router.navigate(['/admin']);
    }
    
  }

  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `images/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'PMO' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(snap => {
        //console.log(snap)
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
         // console.log(snap)
         // console.log(this.downloadURL);
        // this.db.collection('postesArabic').add( { path, size: snap.totalBytes })
        }
      })
    )

    // The file's download URL
    this.downloadURL = this.task.downloadURL(); 
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  saveUrl(url){
   // console.log(url);
    this.item.image = url;
    this.item.thumbnail = url;
  }

}
