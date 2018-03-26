import { Component, OnInit } from '@angular/core';
//import { DataFirebaseService } from '../services/data-firebase.service'
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ItemService } from '../services/item.service';
import { Item } from '../models/Item';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  postesArabicCol: AngularFirestoreCollection<Item>;
  postesArabic: any;

  postDoc: AngularFirestoreDocument<Item>;
  thePostid: any;
  postId: any;
  post: Observable<Item>;
  result: any;
  constructor( private route: ActivatedRoute,
    private afs: AngularFirestore,
    private router: Router,
    private itemService: ItemService) {
    this.route.params.subscribe((params: Params) => {
      //console.log(params);
      this.thePostid = params.id;
      //console.log(this.thePost);
      //this.thePost = this.afs.collection('postesArabic', ref => ref.where('title', '==', params.title)).valueChanges();
      //console.log(this.thePostid);
    })
  }
  ngOnInit() {
    this.postDoc = this.afs.doc('postesArabic/' + this.thePostid);
    // console.log(this.postDoc);
    this.post = this.postDoc.valueChanges();
  }
}