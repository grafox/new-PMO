import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/Item';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent  {

items: Item[] ;
  constructor(db: AngularFirestore){
    const Item  = db.collection('images').valueChanges();
   // Item.forEach(res => console.log(res))
    Item.subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }
}
