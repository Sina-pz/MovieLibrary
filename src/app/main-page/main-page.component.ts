import { findSearchedMovieItem } from './../state-managment/actions/movie-item.action';
import { MovieItem } from 'src/app/models/movie-item';
import { MovieGroup } from 'src/app/models/movie-group';
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../state-managment/states';
import * as selectors from '../state-managment/states';
import * as actions from '../state-managment/actions/movie-group.action';
import { loadGroupList, editMovieGroup } from '../state-managment/actions/movie-group.action';
import { loadMovieItemList, selectMovieItem } from '../state-managment/actions/movie-item.action';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MainPageComponent implements OnInit {

  public showGroupDialog: boolean;
  public showMovieItemDialog: boolean;
  public selectedGroup: MovieGroup;
  public selectedMovieItem: MovieItem;
  public ClickedEditButton: boolean;
  public ClickedAddButton: boolean;
  private searchedName: string;
  public foundMovieItem: MovieItem;
  public showMovieItemList: boolean = true;
  public showFoundMovieItem: boolean = false;

  // public  set searchedName(value: string) {
  //   this._searchedName = value;
  //   this.store.dispatch(findSearchedMovieItem({searchedMovieItemName: this.searchedName }));
  //   this.store.select(selectors.selectSearchedMovieItem).subscribe(item => this.fromSearchedMovieItem(item));
  // }
  public searchedNameF(event) {
    this.searchedName = event.target.value;
    this.store.dispatch(findSearchedMovieItem({searchedMovieItemName: this.searchedName }));
    this.store.select(selectors.selectSearchedMovieItem).subscribe(item => this.fromSearchedMovieItem(item));
  }

  public username: string;
  public password: string;

  constructor(private store: Store<IAppState>, private router: Router) {
   }

  ngOnInit(): void {
    this.store.dispatch(loadGroupList());
    this.store.dispatch(loadMovieItemList());
    this.store.select(selectors.selectSelectedGroup).subscribe(group => this.fromGroupRow(group));
    this.store.select(selectors.selectSelectedMovieItem).subscribe(item => this.fromMovieItem(item));
  }

  public onAddGroup() {
    this.store.dispatch(actions.selectGroup({selectedGroup: undefined}));
    // this.store.dispatch(selectMovieItem({selectedMovieItem: undefined})); ?
    this.showGroupDialog = true;
  }
  public onAddMovieItem() {
    this.store.dispatch(selectMovieItem({selectedMovieItem: undefined}));
    this.showMovieItemDialog = true;
  }
    onEditGroup()  {
      this.showMovieItemDialog = false;
      if (this.selectedGroup) {this.showGroupDialog = true; }
    }

    onEditMovieItem() {
      this.showGroupDialog = false;
      if (this.selectedMovieItem) {this.showMovieItemDialog = true; }
    }

  public fromGroupRow(group: MovieGroup) {
    this.selectedGroup = group;
  }

  public fromMovieItem(item: MovieItem ) {
    this.selectedMovieItem = item;
  }
  public fromSearchedMovieItem(item: MovieItem) {
    this.foundMovieItem = item;
    if (this.foundMovieItem) {
    this.showMovieItemList = false;
    this.showFoundMovieItem = true;
  }
  }
  public onCloseClick() {
    this.showMovieItemList = true;
    this.showFoundMovieItem = false;
  }

  public onCancel() {
    this.showGroupDialog = false;
    this.showMovieItemDialog = false;

  }

  public onConfirm() {
    this.showGroupDialog = false;
    this.showMovieItemDialog = false;
 }

 public onHomeClick() { }

 ////   Login

 login(): void {
  if (this.username === 'admin' && this.password === 'admin') {
    alert("Hi Dear user");
    this.router.navigate(["user"]);
  } else {
    alert(" Invalid credentials ");
  }
}

}



