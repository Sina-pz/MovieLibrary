import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../state-managment/states';
import { loadGroupList } from '../state-managment/actions/movie-group.action';
import { loadMovieItemList } from '../state-managment/actions/movie-item.action';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private store: Store<IAppState>) {
   }

  ngOnInit(): void {
    this.store.dispatch(loadGroupList());
    this.store.dispatch(loadMovieItemList());
  }

}
