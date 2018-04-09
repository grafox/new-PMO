import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { ItemService } from '../services/item.service';

import { CompleterData } from 'ng-mdb-pro/pro/autocomplete';
import { CompleterService } from 'ng-mdb-pro/pro/autocomplete';

export interface Item {

  title?:string;

}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
    items: Item[];
    titles:string;

    protected searchStr: string;
    protected dataService: CompleterData;
    protected searchData = [];

    constructor(private itemService: ItemService,private completerService: CompleterService) {
      this.dataService = completerService.local(this.searchData,'title', 'title');
    }

    ngOnInit() {
      this.itemService.getItems().subscribe(items => {
        console.log(items);
        this.items = items;
        this.items.forEach(res =>  this.searchData.push({"title":res.title}));
        console.log(this.searchData);
      });
    }








  }
