import { MockDB } from './../models/mock-db';
import { MovieGroup } from './../models/movie-group';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieItem } from '../models/movie-item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public movieItemList: MovieItem[];
  public groupList: MovieGroup[];

  constructor() { }

  public getMovieItemList(): Observable<MovieItem[]> {
    const db = new MockDB();
    this.movieItemList = db.getMovieItemList();
    return of<MovieItem[]>(this.movieItemList);
    // return this.http.get('/movies');
  }

  public getMovieGroupList(): Observable<MovieGroup[]> {
    const db = new MockDB();
    this.groupList = db.getMovieItemList();
    return of<MovieGroup[]>(this.groupList);
      }

  public creatMovieItem(item: MovieItem): Observable<MovieItem> {
    const db = new MockDB();
    // const randomMovieItem = db.getRandomMovieItemList()[Math.floor(Math.random() * db.getRandomMovieItemList().length)];
    // this.movieItemList.push(randomMovieItem);
    return of<MovieItem>(db.getRandomMovieItemList()[Math.floor(Math.random() * db.getRandomMovieItemList().length)]);
  }

   public creatGroup(): Observable<MovieGroup> {
    const db = new MockDB();
    return of<MovieGroup>(db.getRandomGroupList()[Math.floor(Math.random() * db.getRandomGroupList().length)]);
    }

    public removeMovieItem(selectedId: number): Observable<MovieItem[]> {
      for (let index = 0; index < this.movieItemList.length; index++) {
        if (selectedId === this.movieItemList[index].groupId) {
          return of<MovieItem[]>(this.movieItemList.splice(index, 1));
        }
      }
    }

    public removeGroup(selectedMovieItemId: number): Observable<MovieGroup[]> {
      for (let index = 0; index < this.groupList.length; index++) {
        if (selectedMovieItemId === this.groupList[index].id) {
          return of<MovieGroup[]>(this.groupList.splice(index, 1));
        }
      }
    }


}
