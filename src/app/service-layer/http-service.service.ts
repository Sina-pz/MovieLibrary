import { MockDB } from './../models/mock-db';
import { MovieGroup } from './../models/movie-group';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieItem } from '../models/movie-item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

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

    public removeMovieItem(): void {
      console.log(this.selectedMovieItemId);
      for (let index = 0; index < this.movieItemList.length; index++) {
        if (this.selectedMovieItemId === this.movieItemList[index].groupId) {
          this.movieItemList.splice(index, 1);
        }
      }
    }

    // public removeGroup(): void {
    //   console.log(this.selectedGroupId);
    //   // this.groupList = this.groupList.filter(item => item.id !== this.selectedGroupId);
    //   for (let index = 0; index < this.groupList.length; index++) {
    //     if (this.selectedGroupId === this.groupList[index].id) {
    //       this.groupList.splice(index, 1);
    //     }
    //   }
    // }


}
