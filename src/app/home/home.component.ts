import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { PaginationService } from '../pagination.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readMore = 'أقرأ المزيد';
  searchPlaceholder = 'بحث';
  PMO = 'المكتب الاعلامي لرئاسة الوزراء';
  in = 'في';

  constructor(public page: PaginationService) {}

  ngOnInit() {
    this.page.init('postesArabic', 'creatAt', { reverse: true, prepend: false })
    // console.log(this.page);
  }
  scrollHandler(e) {
    if (e === 'bottom') {
      this.page.more()
      
    }
    // if (e === 'top') {
    //   this.page.more()
    // }
  }

}