import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/Item'; 
import { FormsModule } from '@angular/forms';
import { FateModule } from 'fate-editor'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    content:'',
    subContent:'',
    creatAt:Date,
    type:'',
    image:'',
    thumbnail:''
  }
/*   image:"https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/logo%2Fthumnail_logo.jpg?alt=media&token=1c851838-d46b-4c73-9f70-e5a0374a226a";
  thumbnail:'https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/logo%2Fthumnail_logo.jpg?alt=media&token=1c851838-d46b-4c73-9f70-e5a0374a226a' */
  
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.item.title != '' && this.item.content != ''){
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.content = '';
      this.item.subContent='';
      this.item.image='https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/logo%2Flogo.jpg?alt=media&token=44f660ec-d7f3-496f-9966-1f8f54ddc6ff';
      this.item.thumbnail='https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/logo%2Fthumnail_logo.jpg?alt=media&token=1c851838-d46b-4c73-9f70-e5a0374a226a';
    }
  }
}
