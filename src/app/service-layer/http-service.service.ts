import { MockDB } from './../models/mock-db';
import { MovieGroup } from './../models/movie-group';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieItem } from '../models/movie-item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private movieItemList: MovieItem[];
  private groupList: MovieGroup[];

  constructor() {}

  public getMovieItemList(): Observable<MovieItem[]> {
    const db = new MockDB();
    this.movieItemList = db.getMovieItemList();
    return of<MovieItem[]>(this.movieItemList);
    // return this.http.get('/movies');
    console.log('hi new movieItemList');
  }

  public getMovieGroupList(): Observable<MovieGroup[]> {
    const db = new MockDB();
    this.groupList = db.getGroupList();
    return of<MovieGroup[]>(this.groupList);
    console.log('hi new groupList');
  }

  public creatMovieItem(item: MovieItem): Observable<MovieItem> {
    const db = new MockDB();
    // const randomMovieItem = db.getRandomMovieItemList()[Math.floor(Math.random() * db.getRandomMovieItemList().length)];
    // this.movieItemList.push(randomMovieItem);
    return of<MovieItem>(db.getRandomMovieItemList()[Math.floor(Math.random() * db.getRandomMovieItemList().length)]);
  }

  public creatGroup(group: MovieGroup): Observable<MovieGroup> {
    const db = new MockDB();
    return of<MovieGroup>(db.getRandomGroupList()[Math.floor(Math.random() * db.getRandomGroupList().length)]);
  }

  public removeMovieItem(selectedMovieItemId: number): Observable<MovieItem[]> {
      for (let index = 0; index < this.movieItemList.length; index++) {
        if (selectedMovieItemId === this.movieItemList[index].groupId) {
          return of<MovieItem[]>(this.movieItemList.splice(index, 1));
        }
      }
  }

  public removeGroup(selectedGroupId: number): Observable<MovieGroup[]> {
      for (let index = 0; index < this.groupList.length; index++) {
        if (selectedGroupId === this.groupList[index].id) {
          return of<MovieGroup[]>(this.groupList.splice(index, 1));
        }
      }
    }


}
