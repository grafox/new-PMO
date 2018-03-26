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
import { AngularFireAuth } from 'angularfire2/auth';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FateModule } from 'fate-editor';
//import { FateIconService } from './fate-icon.service';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';

import { ScrollableDirective } from './scrollable.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PaginationService } from './pagination.service';

import { DropZoneDirective } from './drop-zone.directive';
import { FileSizePipe } from './file-size.pipe';

import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component'

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
    FileSizePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModules.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FateModule
  ],
  exports: [BrowserModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [MDBSpinningPreloader, ItemService,PaginationService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
