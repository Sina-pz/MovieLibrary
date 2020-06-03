import { createMovieGroup } from './../../state-managment/actions/movie-group.action';
import { IAppState } from '../../state-managment/states';
import { MovieGroup } from './../../models/movie-group';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as selectors from '../../state-managment/states';
import * as actions from '../../state-managment/actions/movie-group.action';
import { group } from '@angular/animations';

@Component({
  selector: 'app-movie-group-form',
  templateUrl: './movie-group-form.component.html',
  styleUrls: ['./movie-group-form.component.css']
})
export class MovieGroupFormComponent implements OnInit {

  private _selectedGroup: MovieGroup;
  public selectedGroupFormGroup: FormGroup;

  @Output() cancel  = new EventEmitter<any>();
  @Output() confirm = new EventEmitter<any>();

  @Input() set selectedGroup(value: MovieGroup) {
    this._selectedGroup = value;
    this.populateForm();
  }

  get selectedGroup(): MovieGroup {

    return this._selectedGroup;
  }

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {

// this.selectedGroupFormGroup.valueChanges.subscribe(formValues => console.log(formValues));
  }


  public onCancelClick() {
    this.cancel.emit();
  }

  public onConfirmClick() {
    // propagate action
    this.confirm.emit();
    // update store
    const newGroup = this.selectedGroupFormGroup.value as MovieGroup;
    if (newGroup) {
      if (newGroup.id > 0) {
        this.store.dispatch(actions.editMovieGroup({ group: newGroup }));
      } else {
        this.store.dispatch(createMovieGroup({ group: newGroup }));
      }
    }
  }

  private populateForm() {  // it can be used whenever it is needed
    this.selectedGroupFormGroup = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),
    });

    if (this.selectedGroup) {
      this.selectedGroupFormGroup.setValue(this.selectedGroup);
    } else {
      this.selectedGroupFormGroup.reset(); /// in this example it is Newed in the line 27 and it is not necessary
    }
  }

}

