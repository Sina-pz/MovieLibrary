import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {A11yModule} from '@angular/cdk/a11y';
import { MovieGroupEffects } from './state-managment/effects/movie-group.effect';
import { metaReducers, reducers } from './state-managment/reducers/index';

import { ReactiveFormsModule } from '@angular/forms';


import { _movieGroupReducer } from './state-managment/reducers/movie-group.reducer';
import { _movieItemReducer } from './state-managment/reducers/movie-item.reducer';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GroupListComponent } from './main-page/group-list/group-list.component';
import { GroupRowComponent } from './main-page/group-list/group-row/group-row.component';
import { MovieItemListComponent } from './main-page/movie-item-list/movie-item-list.component';
import { ThumbnailItemComponent } from './main-page/movie-item-list/thumbnail-item/thumbnail-item.component';
import { DialogContentComponent } from './main-page/movie-item-list/thumbnail-item/thumbnail-item.component';
import { ItemDetailComponent } from './main-page/item-detail/item-detail.component';

import { ButtonComponent } from './main-page/button/button.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MovieItemEffects } from './state-managment/effects/movie-item.effect';
import { RowItemDirective } from './row-item.directive';
import { MovieGroupFormComponent } from './main-page/movie-group-form/movie-group-form.component';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MaterialElevationDirective } from './material-elevation.directive';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule} from '@angular/forms';


// import {DemoMaterialModule} from './material-module';

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
    MovieGroupFormComponent,
    DialogContentComponent,
    MaterialElevationDirective
       ],
    exports: [
     MatButtonModule,
     MatBadgeModule,
     MatDialogModule,
     MatMenuModule,
     MatIconModule,
     MatProgressSpinnerModule,
     MatInputModule,
     MatFormFieldModule,
     FormsModule,
     MatBottomSheetModule,
     MatTooltipModule,
     MatDividerModule
    ],
    imports: [
    BrowserModule,
    MatBadgeModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
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
