import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { PaginationServiceType } from '../services/pagination.service.type';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-speeches',
  templateUrl: './speeches.component.html',
  styleUrls: ['./speeches.component.scss']
})
export class SpeechesComponent implements OnInit {

  constructor(public page: PaginationServiceType) {}

  ngOnInit() {
    this.page.reset();
    this.page.init('postesArabic', 'creatAt','خطب', { reverse: true, prepend: false })
    // console.log(this.page);
  }
    scrollHandler(e) {
    if (e === 'bottom') {
      this.page.more()
    }
     if (e === 'top') {
       this.page.more()
     }
  }  
}
