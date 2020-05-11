import { MovieGroup } from './../models/movie-group';
import { Injectable } from '@angular/core';
import { MovieItem } from '../models/movie-item';
import { MockDB } from '../models/mock-db';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LogicService {
  public groupListSubject = new BehaviorSubject<MovieGroup[]>([]);
  public groupList: MovieGroup[];
  public selectedGroupId: number;

  public selectedMovieItemId: number;
  public movieItemList: MovieItem[];
  public filteredMovieItemListSubject = new BehaviorSubject<MovieItem[]>([]);

  constructor() {
    const db = new MockDB();
    this.groupList = db.getGroupList();
    this.groupListSubject.next(this.groupList);
    this.movieItemList = db.getMovieItemList();
  }

  public updateFilteredItemsByGroupId( groupId: number): void {    /// is the name right?
    let newList: MovieItem[];
    this.selectedGroupId = groupId;
    // console.log(this.selectedGroupId);
    if (groupId) {
      newList = this.movieItemList.filter(item => item.groupId ===  groupId);
      // this.filteredMovieItemList = this.movieItemList.filter(item => item.groupId ===  groupId);
    } else {
      newList = [];
      // this.filteredMovieItemList = [];
    }

    this.filteredMovieItemListSubject.next(newList);
  }

  public addGroup(): void {
    const db = new MockDB();
    const randomGroup = db.getRandomGroupList()[Math.floor(Math.random() * db.getRandomGroupList().length)];
    this.groupList.push(randomGroup);
  }

  public addMovieItem(): void {
    const db = new MockDB();
    const randomMovieList = db.getRandomMovieItemList()[Math.floor(Math.random() * db.getRandomMovieItemList().length)];
    this.movieItemList.push(randomMovieList);
  }

  public removeGroup(): void {
    console.log(this.selectedGroupId);
    // this.groupList = this.groupList.filter(item => item.id !== this.selectedGroupId);
    for (let index = 0; index < this.groupList.length; index++) {
      if (this.selectedGroupId === this.groupList[index].id) {
        this.groupList.splice(index, 1);
      }
    }
  }

  public selectedMovieItemsByGroupId(Id: number): void {
    this.selectedMovieItemId = Id;
  }

  public removeMovieItem(): void {
    console.log(this.selectedMovieItemId);
    for (let index = 0; index < this.movieItemList.length; index++) {
      if (this.selectedMovieItemId === this.movieItemList[index].groupId) {
        this.movieItemList.splice(index, 1);
      }
    }
  }


}

