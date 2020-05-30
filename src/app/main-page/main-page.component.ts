import { MovieGroup } from 'src/app/models/movie-group';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../state-managment/states';
import * as selectors from '../state-managment/states';
import { loadGroupList } from '../state-managment/actions/movie-group.action';
import { loadMovieItemList } from '../state-managment/actions/movie-item.action';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public showGroupDialog: boolean;
  public selectedGroup: MovieGroup;

  constructor(private store: Store<IAppState>) {
   }

  ngOnInit(): void {
    this.store.dispatch(loadGroupList());
    this.store.dispatch(loadMovieItemList());
    this.store.select(selectors.selectSelectedGroup).subscribe(list => this.fromGroupRow(list));
  }

  public fromGroupRow(group: MovieGroup) {
    this.selectedGroup = group;
    // this.selectedGroup.emit(group);

  }

  public onAddGroup() {
    this.showGroupDialog = true;
  }

  onEditGroup()  {
    this.showGroupDialog = true;
  }

  public onCancelGroup() {
    this.showGroupDialog = false;
  }

  public onConfirmGroup() {
    this.showGroupDialog = false;
  }
}
