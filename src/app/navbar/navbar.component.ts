import { Component} from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { DeclarationComponent } from '../declaration/declaration.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchPlaceholder = 'بحث';
  PMO = 'المكتب الاعلامي لرئاسة الوزراء';
  admin = ' تسجيل الدخول ';
  search = ' بـحــث';
  dietary = ' البرنامج الحكومي';
  gallery = ' معرض الصور';
  statement = ' قرارات مجلس الوزراء';
  speeches = ' كلمات ';
  declaration = ' البيانات ';

  constructor() {}

}
