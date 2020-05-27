import { MovieGroup } from './../../models/movie-group';
import { Component, OnInit, Inject, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-dialog-button',
  templateUrl: './dialog-button.component.html',
  styleUrls: ['./dialog-button.component.css']
})
export class DialogButtonComponent {

  public name: string;
  public id: number;
  public movieGroup = new MovieGroup();

   @Input()
   text: string;
   @Output()
   buttonClick: EventEmitter<MovieGroup> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogButtonDialogComponent, {
      width: '265px',
      data: { name: this.name, id: this.id }
    });

    this.movieGroup.id = this.id;
    this.movieGroup.name = this.name;
    this.buttonClick.emit(this.movieGroup);
  }

}

@Component({
  selector: 'app-dialog-button-dialog',
  templateUrl: './dialog-button-dialog.component.html',
})
export class DialogButtonDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogButtonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

   onNoClick(): void {
    this.dialogRef.close();
  }

}
