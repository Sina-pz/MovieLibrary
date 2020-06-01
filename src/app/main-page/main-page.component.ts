import { MovieGroup } from 'src/app/models/movie-group';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../state-managment/states';
import * as selectors from '../state-managment/states';
import { loadGroupList, editMovieGroup } from '../state-managment/actions/movie-group.action';
import { loadMovieItemList } from '../state-managment/actions/movie-item.action';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public showGroupDialog: boolean;
  public selectedGroup: MovieGroup;
  public ClickedEditButton: boolean;
  public ClickedAddButton: boolean;

  constructor(private store: Store<IAppState>) {
   }

  ngOnInit(): void {
    this.store.dispatch(loadGroupList());
    this.store.dispatch(loadMovieItemList());
  }

  public onAddGroup() {
    this.showGroupDialog = true;
    this.ClickedAddButton = true;
    this.ClickedEditButton = false;
    // this.store.dispatch(addGroup);
  }

  onEditGroup()  {
    this.store.select(selectors.selectSelectedGroup).subscribe(list => this.fromGroupRow(list));
    if (this.selectedGroup) {this.showGroupDialog = true; }
    this.ClickedEditButton = true;
    this.ClickedAddButton = false;
  }

  public fromGroupRow(group: MovieGroup) {
    this.selectedGroup = group;
  }

  public onCancelGroup() {
    this.showGroupDialog = false;
  }

  public onConfirmGroup() {
    this.showGroupDialog = false;
  //  this.store.dispatch(editMovieGroup({group: this.selectedGroup})); // not complete
  }
}
