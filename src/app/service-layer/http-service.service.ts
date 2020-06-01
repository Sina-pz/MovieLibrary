import { MockDB } from './../models/mock-db';
import { MovieGroup } from './../models/movie-group';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieItem } from '../models/movie-item';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public movieItemList: MovieItem[];
  public groupList: MovieGroup[];

  constructor() {}

  public getMovieItemList(): Observable<MovieItem[]> {
    const db = new MockDB();
    this.movieItemList = db.getMovieItemList();
    return of<MovieItem[]>(this.movieItemList);
    // return this.http.get('/movies');
    // console.log('hi new movieItemList');
  }

  public getMovieGroupList(): Observable<MovieGroup[]> {
    const db = new MockDB();
    this.groupList = db.getGroupList();
    return of<MovieGroup[]>(this.groupList);
    // console.log('hi new groupList');
  }

  public creatMovieItem(item: MovieItem): Observable<MovieItem> {
    const db = new MockDB();
    return of<MovieItem>(db.getRandomMovieItemList()[Math.floor(Math.random() * db.getRandomMovieItemList().length)]);
  }

  public creatGroup(group: MovieGroup): Observable<MovieGroup> {
    const db = new MockDB();
    const randomGroup = db.getRandomGroupList()[Math.floor(Math.random() * db.getRandomGroupList().length)];
    return of<MovieGroup>(group);
  }

  public editGroup(group: MovieGroup): Observable<boolean> {
    const successMessage = true;
    return of<boolean>(successMessage);
  }


  public removeMovieItem(): Observable<boolean> {
      // for (let index = 0; index < filteredMovieItemList.length; index++) {
      //   if (selectedMovieItemId === filteredMovieItemList[index].groupId) {
      //     const newGroupList = filteredMovieItemList.map(group => group);
      //     newGroupList.splice(index, 1);
      const successMessage = true;
      return of<boolean>(successMessage);
        }

  public removeGroup(): Observable<boolean> {

    // for (let index = 0; index < this.groupList.length; index++) {
    //   if (selectedGroupId === updatedGroupList[index].id) {
    //     // const newGroupList = groupList.map(group => group); read only property can not change
    //     const newGroupList = updatedGroupList.map(group => group);
    //     newGroupList.splice(index, 1);
           const successMessage = true;
           return of<boolean>(successMessage);
        //  this.groupList.filter( group =>  group.id !== selectedGroupId)
        //     return of<MovieGroup[]>();
      }

}
