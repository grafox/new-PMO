import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { ItemService } from '../services/item.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-dietary',
  templateUrl: './dietary.component.html',
  styleUrls: ['./dietary.component.scss']
})
export class DietaryComponent implements OnInit {

  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      //console.log(items);
      this.items = items;
    });
  }

}
