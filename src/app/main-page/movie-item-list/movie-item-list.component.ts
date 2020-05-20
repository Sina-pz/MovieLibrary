import { MovieItem } from './../../models/movie-item';
import { createMovieItem, removeItem, filterMovieItemList } from './../../state-managment/actions/movie-item.action';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from 'src/app/service-layer/logic.service';
import { IAppState } from 'src/app/state-managment/states';
import * as selectors from '../../state-managment/states';


@Component({
  selector: 'app-movie-item-list',
  templateUrl: './movie-item-list.component.html',
  styleUrls: ['./movie-item-list.component.css']
})
export class MovieItemListComponent implements OnInit {

  public movieItemList: MovieItem[];
  public readonly addButtonLabel = 'Add';
  public readonly removeButtonLabel = 'Rmv';
  private selectedId: number;

  constructor(private store: Store<IAppState>) {
    //  const movieItemList$ = logic.filteredMovieItemListSubject.asObservable();
    //  movieItemList$.subscribe(itemList => this.movieItemList = itemList);
    //  logic.filteredMovieItemListSubject.asObservable().subscribe(itemList => this.movieItemList = itemList);
   }

  ngOnInit(): void {

    this.store.select(selectors.selectFilteredMovieItemList).subscribe(itemList => this.movieItemList = itemList);
  }

  onAddButtonClick() {
    // this.logic.addMovieItem();
    console.log ('hi addGroup click');
   // (clickedButton)="onButtonSelect($event)"
   //  this.groupIdSelect = groupId;
   // console.log('click on a group which is:' + groupId);
    this.store.dispatch(createMovieItem({item: new MovieItem()})); // user vared mikone
  }

  onMoveItemSelect(id: number) {
    this.selectedId = id;
  }

  onRmvButtonClick() {
    // this.logic.removeMovieItem();
    console.log('hi removeGroup click');
    // (clickedButton)="onButtonSelect($event)"
    //  this.groupIdSelect = groupId;
    //  console.log('click on a group which is:' + groupId); filterMovieItemList: this.movieItemList
    this.store.dispatch(removeItem({ selectedMovieItemId: this.selectedId, filteredMovieItemList: this.movieItemList }));
  }



}
