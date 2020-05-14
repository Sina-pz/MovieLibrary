import { MockDB } from './../models/mock-db';
import { MovieGroup } from './../models/movie-group';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieItem } from '../models/movie-item';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor() { }

  public getMovieItemList(): Observable<MovieItem[]> {
    const db = new MockDB();
    return of<MovieItem[]>(db.getMovieItemList());

    // return this.http.get('/movies');
  }

  public getMovieGroupList(): Observable<MovieGroup[]> {
    const db = new MockDB();
    return of<MovieGroup[]>(db.getGroupList());
  }
}
