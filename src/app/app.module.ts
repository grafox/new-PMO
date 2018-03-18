import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModules } from 'ng-mdb-pro';

import { MDBSpinningPreloader } from 'ng-mdb-pro';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModules.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
