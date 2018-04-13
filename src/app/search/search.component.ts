import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { ItemService } from '../services/item.service';
import { PaginationServiceTitle } from '../services/pagination.service.title';
import { CompleterData } from 'ng-mdb-pro/pro/autocomplete';
import { CompleterService } from 'ng-mdb-pro/pro/autocomplete';

export interface Item {
  id?:string;
  title?:string;
  subContent?: string;
  content?:string;
  thumbnail?:string;
  image?:string;
 // images?:string;
  type?:string;
  by?:string;
  creatAt?:Date;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  items: Item[];

  titles: string;

  searchStr: string;
  dataService: CompleterData;
  searchData = [];

  constructor(private itemService: ItemService, private completerService: CompleterService,public page: PaginationServiceTitle) {
    this.dataService = completerService.local(this.searchData, 'title', 'title');
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
     // console.log(items);
      this.items = items;
      this.items.forEach(res => this.searchData.push({ "title": res.title }));
      console.log(this.searchData);
       if (!this.searchStr){
        this.page.init('postesArabic', 'title', this.searchStr, 4, { reverse: false, prepend: false })
      } 
    });
  }








}
