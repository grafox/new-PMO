import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MDBBootstrapModules } from 'ng-mdb-pro';
import { MDBSpinningPreloader } from 'ng-mdb-pro';

import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ItemService } from './services/item.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FateModule, FateIconService } from 'fate-editor';
//import { FateIconService, MdbootstrapIconService } from './fate-icon.service';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';

import { ScrollableDirective } from './directive/scrollable.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PaginationService } from './services/pagination.service';

import { DropZoneDirective } from './directive/drop-zone.directive';
import { FileSizePipe } from './pipes/file-size.pipe';

import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StatementComponent } from './statement/statement.component';
import { SpeechesComponent } from './speeches/speeches.component';
import { DietaryComponent } from './dietary/dietary.component';

import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { PaginationServiceType } from './services/pagination.service.type';
import { DeclarationComponent } from './declaration/declaration.component';
import { PaginationServiceTitle } from './services/pagination.service.title';
import { InputTrimModule } from 'ng2-trim-directive';
import { MdbootstrapIconService } from './services/fate-icon.service';
import { ToastModule } from 'ng-mdb-pro/pro/alerts/toast/toast.module';

import { NgNetworkStatusModule } from 'ng-network-status';

//import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    DetailsComponent,
    FooterComponent,
    SearchComponent,
    NavbarComponent,
    AdminComponent,
    AddItemComponent,
    BannerComponent,
    GalleryComponent,
    EscapeHtmlPipe,
    ScrollableDirective,
    LoadingSpinnerComponent,
    DropZoneDirective,
    FileSizePipe,
    StatementComponent,
    SpeechesComponent,
    DietaryComponent,
    DeclarationComponent
  ],
  imports: [
    BrowserModule,
    NgNetworkStatusModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModules.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FateModule,
    InputTrimModule,
    ToastModule.forRoot()

  ],
  exports: [BrowserModule],
  schemas: [NO_ERRORS_SCHEMA],
  //providers: [MDBSpinningPreloader, ItemService,PaginationService,AngularFireAuth,AuthService,AuthGuard, FlashMessagesService ],
  providers: [MDBSpinningPreloader, 
              ItemService, 
              AngularFireAuth, 
              AuthService, 
              PaginationService,
              PaginationServiceType,
              PaginationServiceTitle,
              { provide: FateIconService, useClass: MdbootstrapIconService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
