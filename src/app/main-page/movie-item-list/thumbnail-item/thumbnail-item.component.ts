import { createMovieItem, selectMovieItem } from './../../../state-managment/actions/movie-item.action';
import { IAppState } from './../../../state-managment/states/index';
import { Store } from '@ngrx/store';
import { LogicService } from './../../../service-layer/logic.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieItem } from 'src/app/models/movie-item';


@Component({
  selector: 'app-thumbnail-item',
  templateUrl: './thumbnail-item.component.html',
  styleUrls: ['./thumbnail-item.component.css']
})
export class ThumbnailItemComponent implements OnInit {

  @Input()
   movieItem: MovieItem;
  @Output()
   idSelect: EventEmitter<number> = new EventEmitter();

  constructor(private logic: LogicService, private store: Store<IAppState>) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.movieItem) {
      // this.logic.selectedMovieItemsByGroupId(this.movieItem.groupId);
      // this.logic.removeMovieItem();
      // this.store.dispatch(createMovieItem({Item: this.movieItem}));
      this.store.dispatch(selectMovieItem({ selectedId: this.movieItem.groupId }));
      this.idSelect.emit(this.movieItem.groupId);
    }
  }

}
