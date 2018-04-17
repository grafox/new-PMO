import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { DeclarationComponent } from '../declaration/declaration.component';
import { NetworkStatusService } from 'ng-network-status';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchPlaceholder = 'بحث';
  PMO = 'المكتب الاعلامي لرئاسة الوزراء';
  admin = ' تسجيل الدخول ';
  search = ' بـحــث';
  dietary = ' البرنامج الحكومي';
  gallery = ' معرض الصور';
  statement = ' قرارات مجلس الوزراء';
  speeches = ' كلمات ';
  declaration = ' البيانات ';

  networkStatus = "Online";

  constructor(private networkStatusService: NetworkStatusService) { }
  ngOnInit() {
    this.networkStatusService.healthCheck();
    // Subscribe on network status change event 
    this.networkStatusService.isOnline.subscribe(isOnline => {
      this.networkStatus = isOnline ? "Online" : "Offline";
    });
  }
}
