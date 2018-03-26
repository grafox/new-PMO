import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AdminComponent } from './admin/admin.component';
import { ItemsComponent } from './items/items.component'
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addItem', component: AddItemComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'item', component: ItemsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
