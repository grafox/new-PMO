import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService } from '../services/auth.service';

import { ToastService } from 'ng-mdb-pro/pro/alerts/toast/toast.service';
import { Positioning } from 'ng-mdb-pro/free/utils/positioning';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  LOGIN= "تسجيل الدخول";
  Email="البريد الالكتروني";
  Password="كلمة المرور";
  SUBMIT="تسجيل";
  Logout="تسجيل الخروج";
  Hello="مرحبا ... يمكنك اضافة أو تعديل مقال أو تسجيل الخروج عند الانتهاء";
  public isLogin: boolean;
  public username: string;
  public emailUser: string;
  public fotoUsuario: string;
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    private toastrService: ToastService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.username = auth.displayName;
        this.emailUser = auth.email;
        this.fotoUsuario = auth.photoURL;
      } else {
        this.isLogin = false;
      }
    });
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      let options = { enableHtml: false,  positionClass: 'toast-bottom-center' };
      this.toastrService.success('', 'تم الدخول بنجاح',options);
      this.router.navigate(['/admin']);
    }).catch((err) => {
      let options = { enableHtml: false,  positionClass: 'toast-bottom-center' };
      this.toastrService.error('', 'هناك خطأ',options)
      this.router.navigate(['/admin']);
    });
  }

  onClickLogout() {
    this.authService.logout();
    this.username = '';
    this.password='';
  }
}
