import { MovieGroup } from 'src/app/models/movie-group';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-movie-group-form',
  templateUrl: './movie-group-form.component.html',
  styleUrls: ['./movie-group-form.component.css']
})
export class MovieGroupFormComponent implements OnInit {

  @Output() cancel = new EventEmitter<any>();
  @Output() confirm = new EventEmitter<any>();
  @Input() selectedGroup: MovieGroup;
  constructor() { }

  ngOnInit(): void {
  }

  public onCancelClick() {
    this.cancel.emit();
  }

  public onConfirmClick() {
    this.confirm.emit();
  }

}
