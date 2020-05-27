import { MovieGroupEffects } from './state-managment/effects/movie-group.effect';
import { metaReducers, reducers } from './state-managment/reducers/index';

import { _movieGroupReducer } from './state-managment/reducers/movie-group.reducer';
import { _movieItemReducer } from './state-managment/reducers/movie-item.reducer';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MovieItemEffects } from './state-managment/effects/movie-item.effect';
import { RowItemDirective } from './row-item.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogButtonComponent } from './main-page/dialog-button/dialog-button.component';
import { DialogButtonDialogComponent } from './main-page/dialog-button/dialog-button.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'; //
import { FormsModule, ReactiveFormsModule} from '@angular/forms';   // input
import { MatInputModule } from '@angular/material/input';


// @NgModule({
//   exports: [
//     MatFormFieldModule,
//      ],
//   declarations: [
//     DialogButtonComponent,
//     DialogButtonDialogComponent
//   ],
// })
// export class MaterialModule {}




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
    RowItemDirective,
    DialogButtonComponent,
    DialogButtonDialogComponent,
  //  MatFormFieldModule,  // in mohem nist
    MatDialogModule
   ],
     exports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
     ],
     schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
  imports: [
    BrowserModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, // 4 ta erro hazv   <mat-form-field>
    FormsModule, // added for [(ngModel)]
    AppRoutingModule,
    StoreModule.forRoot({
        movieItemState: _movieItemReducer,
        movieGroupState: _movieGroupReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([MovieItemEffects, MovieGroupEffects ]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
