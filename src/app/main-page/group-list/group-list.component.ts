import { MovieGroup } from './../../models/movie-group';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IAppState } from 'src/app/state-managment/states';
import { Store } from '@ngrx/store';
import * as selectors from '../../state-managment/states';
import * as actions from '../../state-managment/actions/movie-group.action';


@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  @Output() public addGroup = new EventEmitter<any>();
  @Output() public editGroup = new EventEmitter<any>();
  public groupList: MovieGroup[];
  public readonly addButtonLabel = 'Add';
  public readonly removeButtonLabel = 'Rmv';
  public readonly editButtonLabel = 'Edit';
  public selectedId: number;

  // @Output()
  // groupSelectId: EventEmitter<number> = new EventEmitter();

  constructor(private store: Store<IAppState>) {
  // logic.groupListSubject.asObservable().subscribe(list => this.fromGroupList(list));

  }

  ngOnInit(): void {
    this.store.select(selectors.selectGroupList).subscribe(list => this.fromGroupList(list));
  }

  private fromGroupList(list: MovieGroup[]): void {
    this.groupList = list;
  }

  onAddButtonClick() {
    console.log('hi addGroup click');
    this.addGroup.emit();
    // this.store.dispatch(actions.createMovieGroup({
    //   group: new MovieGroup()
    // }));
  }

  onRmvButtonClick() {
    // this.logic.removeGroup();
    console.log('hi removeGroup click');
    // (clickedButton)="onButtonSelect($event)"
    //  this.groupIdSelect = groupId;
    //  console.log('click on a group which is:' + groupId);
    this.store.dispatch(actions.removeGroup());
  }

  onEditButtonClick() {
    this.editGroup.emit();

  }

}
