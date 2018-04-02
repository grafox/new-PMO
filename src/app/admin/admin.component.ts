import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService } from '../auth.service';
//import {FlashMessagesService} from 'angular2-flash-messages';

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
  Hello="مرحبا";
  public isLogin: boolean;
  public username: string;
  public emailUser: string;
  public fotoUsuario: string;
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    //public FlashMessages: FlashMessagesService
  ) {
   }

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
/*       this.FlashMessages.show('User logged in correctly.',
      {cssClass: 'alert-success', timeout: 4000}); */
      this.router.navigate(['/admin']);
    }).catch((err) => {
/*       this.FlashMessages.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000}); */
      this.router.navigate(['/admin']);
    });
  }

  onClickLogout() {
    this.authService.logout();
    this.username = '';
    this.password='';
  }
}
