import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(meta: Meta, title: Title){

    title.setTitle('المكتب الاعلامي لرئاسة الوزراء');

    meta.addTags([
      { name: 'author',   content: 'المكتب الاعلامي لرئاسة الوزراء'},
      { name: 'keywords', content: 'د. حيدر العبادي  ::: رئيس وزراء جمهورية العراق '},
      { name: 'description', content: 'د. حيدر العبادي  ::: رئيس وزراء جمهورية العراق ' }
    ]);
  }
  

}
