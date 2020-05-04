
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GroupListComponent } from './main-page/group-list/group-list.component';
import { GroupRowComponent } from './main-page/group-list/group-row/group-row.component';
import { MovieItemListComponent } from './main-page/movie-item-list/movie-item-list.component';
import { ThumbnailItemComponent } from './main-page/movie-item-list/thumbnail-item/thumbnail-item.component';
import { ItemDetailComponent } from './main-page/item-detail/item-detail.component';

import { ButtonComponent } from './main-page/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GroupListComponent,
    GroupRowComponent,
    MovieItemListComponent,
    ThumbnailItemComponent,
    ItemDetailComponent,
    ButtonComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
