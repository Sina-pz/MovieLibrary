import { IAppState } from '../../state-managment/states';
import { MovieGroup } from './../../models/movie-group';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as selectors from '../../state-managment/states';

@Component({
  selector: 'app-movie-group-form',
  templateUrl: './movie-group-form.component.html',
  styleUrls: ['./movie-group-form.component.css']
})
export class MovieGroupFormComponent implements OnInit {

  constructor(private store: Store<IAppState>) {
   }

  @Output() cancel  = new EventEmitter<any>();
  @Output() confirm = new EventEmitter<any>();

  @Input()  selectedGroup: MovieGroup;  // chera nemishe ba debug track kard! mage change detective nist
  @Input() ClickedEditButton: boolean;
  @Input() ClickedAddButton: boolean;

  selectedGroupForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
  });

  ngOnInit(): void {
  }

  public onCancelClick() {
    this.cancel.emit();
  }

  public onConfirmClick() {
    this.confirm.emit();
  }

}
