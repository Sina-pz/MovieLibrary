import { MockDB } from './../models/mock-db';
import { MovieGroup } from './../models/movie-group';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieItem } from '../models/movie-item';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  // public movieItemList: MovieItem[];

  constructor() { }

  public getMovieItemList(): Observable<MovieItem[]> {
    const db = new MockDB();
    // this.movieItemList = db.getMovieItemList();
    return of<MovieItem[]>(db.getMovieItemList());
    // return this.http.get('/movies');
  }

  public getMovieGroupList(): Observable<MovieGroup[]> {
    const db = new MockDB();
    return of<MovieGroup[]>(db.getGroupList());
      }

  public creatMovieItem(): Observable<MovieItem> {
    const db = new MockDB();
    // const randomMovieItem = db.getRandomMovieItemList()[Math.floor(Math.random() * db.getRandomMovieItemList().length)];
    // this.movieItemList.push(randomMovieItem);
    return of<MovieItem>(db.getRandomMovieItemList()[Math.floor(Math.random() * db.getRandomMovieItemList().length)]);
  }

   public creatGroup(): Observable<MovieGroup> {
    const db = new MockDB();
    return of<MovieGroup>(db.getRandomGroupList()[Math.floor(Math.random() * db.getRandomGroupList().length)]);
    }


}
