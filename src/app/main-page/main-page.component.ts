import { Component, OnInit } from '@angular/core';
import { MockDB } from '../models/mock-db';
import { MovieGroup } from '../models/movie-group';
import { MovieItem } from '../models/movie-item';
import { Store } from '@ngrx/store';
import { IAppState } from '../state-managment/states';
import { getGroupList } from '../state-managment/action';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private store: Store<IAppState>) {
   }

  ngOnInit(): void {
    this.store.dispatch(getGroupList());
  }

}
