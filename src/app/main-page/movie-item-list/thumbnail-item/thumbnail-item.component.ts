import { createMovieItem, selectMovieItem } from './../../../state-managment/actions/movie-item.action';
import { IAppState } from './../../../state-managment/states/index';
import { Store } from '@ngrx/store';
import { LogicService } from './../../../service-layer/logic.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import { MovieItem } from './../../../models/movie-item';
import {MatDialog} from '@angular/material/dialog';
import * as selectors from '../../../state-managment/states';

@Component({
  selector: 'app-thumbnail-item',
  templateUrl: './thumbnail-item.component.html',
  styleUrls: ['./thumbnail-item.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class ThumbnailItemComponent implements OnInit {

  @Input() movieItem: MovieItem;

  // private _movieItemList: MovieItem[];
  // @Input() set movieItemList(itemList: MovieItem[]) {

  //   this._movieItemList = itemList;
  // }
  // @Output()
  //  idSelect: EventEmitter<number> = new EventEmitter();

  constructor(private logic: LogicService, private store: Store<IAppState>, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.movieItem) {
      // this.logic.selectedMovieItemsByGroupId(this.movieItem.groupId);
      // this.logic.removeMovieItem();
      // this.store.dispatch(createMovieItem({Item: this.movieItem}));
      this.store.dispatch(selectMovieItem({ selectedMovieItem: this.movieItem }));
      // this.idSelect.emit(this.movieItem.groupId);
    }

  }

  onDetailClick() {
    // open dialog
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./thumbnail-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogContentComponent {

  public SelectedMovieItemId: number;
  public selectedMovieItem: MovieItem;
  public movieItemList: MovieItem[];

  constructor(private store: Store<IAppState>) {
    this.store.select(selectors.selectSelectedMovieItem).subscribe(SelectedMovieItem => this.SelectedMovieItemId = SelectedMovieItem.id);
    this.store.select(selectors.selectFilteredMovieItemList).subscribe(itemList => this.movieItemList = itemList);

    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.movieItemList.length; index++) {
      if (this.movieItemList[index].id === this.SelectedMovieItemId) {
        this.selectedMovieItem = this.movieItemList[index];
      }
    }
    console.log(this.selectedMovieItem);
  }
}



