import { _movieGroupReducer } from './state-managment/reducers/movie-group.reducer';
import { _movieItemReducer } from './state-managment/reducers/movie-item.reducer';


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
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { movieGroupReducer } from './state-managment/reducer';



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
    AppRoutingModule,
    StoreModule.forRoot({movieItemState: _movieItemReducer}, {movieGroupState: _movieGroupReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
