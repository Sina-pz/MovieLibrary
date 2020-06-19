import { MovieItem } from 'src/app/models/movie-item';
import { MovieGroup } from 'src/app/models/movie-group';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../state-managment/states';
import * as selectors from '../state-managment/states';
import * as actions from '../state-managment/actions/movie-group.action';
import { loadGroupList, editMovieGroup } from '../state-managment/actions/movie-group.action';
import { loadMovieItemList, selectMovieItem } from '../state-managment/actions/movie-item.action';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public showGroupDialog: boolean;
  public showMovieItemDialog: boolean;
  public selectedGroup: MovieGroup;
  public selectedMovieItem: MovieItem;
  public ClickedEditButton: boolean;
  public ClickedAddButton: boolean;

  constructor(private store: Store<IAppState>) {
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

  public onCancel() {
    this.showGroupDialog = false;
    this.showMovieItemDialog = false;

  }

  public onConfirm() {
    this.showGroupDialog = false;
    this.showMovieItemDialog = false;
 }


}
