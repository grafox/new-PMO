import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { PaginationService } from '../services/pagination.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readMore = 'أقرأ المزيد';
  searchPlaceholder = 'بحث';
  PMO = 'المكتب الاعلامي لرئاسة الوزراء';
  in = 'في';

  constructor(public page: PaginationService,meta: Meta) {

    meta.addTags([
      { name: 'author',   content: 'المكتب الاعلامي لرئاسة الوزراء'},
      { name: 'keywords', content: 'د. حيدر العبادي  ::: رئيس وزراء جمهورية العراق '},
      { name: 'description', content: 'د. حيدر العبادي  ::: رئيس وزراء جمهورية العراق ' }
    ]);
  }

  ngOnInit() {
    this.page.reset();
    this.page.init('postesArabic', 'creatAt', 4, { reverse: false, prepend: false })
    //const recentItem = [];
    // this.page.data.forEach(item => console.log(item))
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