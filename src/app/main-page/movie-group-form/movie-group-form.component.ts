import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-group-form',
  templateUrl: './movie-group-form.component.html',
  styleUrls: ['./movie-group-form.component.css']
})
export class MovieGroupFormComponent implements OnInit {

  @Output() cancel = new EventEmitter<any>();
  @Output() confirm = new EventEmitter<any>();
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
