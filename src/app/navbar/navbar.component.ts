import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchPlaceholder = 'بحث';
  PMO = 'المكتب الاعلامي لرئاسة الوزراء';

  constructor() { }

  ngOnInit() {
  }

}
