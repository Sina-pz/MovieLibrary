import { filterMovieItemList, enumerateFilterMovieItemList } from './../../state-managment/actions/movie-item.action';
import { MovieItem } from './../../models/movie-item';
import { editMovieItem, createMovieItem } from '../../state-managment/actions/movie-item.action';
import { IAppState } from '../../state-managment/states';
import { MovieGroup } from './../../models/movie-group';
import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as selectors from '../../state-managment/states';
import * as actions from '../../state-managment/actions/movie-group.action';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-movie-group-form',
  templateUrl: './movie-group-form.component.html',
  styleUrls: ['./movie-group-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieGroupFormComponent implements OnInit {

  @Output() cancel = new EventEmitter<any>();
  @Output() confirm = new EventEmitter<any>();
  @Input()  showGroupDialog: boolean;

  @Input() set selectedGroup(value: MovieGroup) {
    this._selectedGroup = value;
    this.populateGroupForm();
  }

  @Input() set selectedMovieItem(value: MovieItem) {
  this._selectedMovieItem = value;
  this.populateMovieItemForm();
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  get selectedGroup(): MovieGroup {
    return this._selectedGroup;
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  get selectedMovieItem(): MovieItem {
    return this._selectedMovieItem;
  }

  // tslint:disable-next-line: variable-name
  private _selectedGroup: MovieGroup;
  // tslint:disable-next-line: variable-name
  private _selectedMovieItem: MovieItem;

  @Input() ClickedEditButton: boolean;
  @Input() ClickedAddButton: boolean;

  public selectedGroupFormGroup: FormGroup;
  public selectedMovieItemFormGroup: FormGroup;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.selectedGroupFormGroup.valueChanges.subscribe((formValues) => console.log(formValues) );
    this.selectedMovieItemFormGroup.valueChanges.subscribe((formValues) => console.log(formValues) );
  }

  public onCancelClick() {
    this.cancel.emit();
  }

  public onConfirmClick() {
    // propagate confirm to the parent
    this.confirm.emit();
    // update store
    if (this.showGroupDialog) {

      const newGroup = this.selectedGroupFormGroup.value as MovieGroup;
      if (newGroup.name !== null) {  // newGroup.name worked .value did not work
        if (newGroup.id > 0) {
          this.store.dispatch(actions.editMovieGroup({ group: newGroup }));
        } else {
          this.store.dispatch(actions.createMovieGroup({ group: newGroup }));
        }
      }

    } else {
      const newMovieItem = this.selectedMovieItemFormGroup.value as MovieItem;
      if (newMovieItem.name !== null) {  // newGroup.name worked .value did not work
        if (newMovieItem.id > 0) {
          this.store.dispatch(editMovieItem({ item: newMovieItem }));
          this.store.dispatch(filterMovieItemList({selectedGroupId: newMovieItem.groupId }));
          this.store.dispatch(enumerateFilterMovieItemList({selectedGroupId: this.selectedGroup.id}));
        } else {
          this.store.dispatch(createMovieItem({ item: newMovieItem, selectedGroupId: this.selectedGroup.id }));
          this.store.dispatch(filterMovieItemList({selectedGroupId: this.selectedGroup.id }));
          this.store.dispatch(enumerateFilterMovieItemList({selectedGroupId: this.selectedGroup.id}));
        }
      }
    }

  }

  private populateGroupForm() {

    this.selectedGroupFormGroup = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),
    });

    if (this.selectedGroup) {
      this.selectedGroupFormGroup.setValue(this.selectedGroup);
    } else {
      this.selectedGroupFormGroup.reset();
    }
  }

private populateMovieItemForm() {

  this.selectedMovieItemFormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    groupId: new FormControl(''),
    duration: new FormControl(''),
    source: new FormControl(''),
    detail: new FormControl(''),
  });

  if (this.selectedMovieItem) {
    this.selectedMovieItemFormGroup.setValue(this.selectedMovieItem);
  } else {
    this.selectedMovieItemFormGroup.reset();
  }
}

}

