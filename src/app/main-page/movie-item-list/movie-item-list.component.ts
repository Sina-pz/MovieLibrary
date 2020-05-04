import { Component, OnInit, Input } from '@angular/core';
import { MovieItem } from 'src/app/models/movie-item';
import { LogicService } from 'src/app/service-layer/logic.service';


@Component({
  selector: 'app-movie-item-list',
  templateUrl: './movie-item-list.component.html',
  styleUrls: ['./movie-item-list.component.css']
})
export class MovieItemListComponent implements OnInit {

  public movieItemList: MovieItem[];
  public readonly addButtonLabel = 'Add';
  public readonly removeButtonLabel = 'Rmv';

  constructor(private logic: LogicService) {
     const movieItemList$ = logic.filteredMovieItemListSubject.asObservable();
     movieItemList$.subscribe(itemList => this.movieItemList = itemList);
   }

  ngOnInit(): void {
  }

  onAddButtonClick() {
    this.logic.addMovieItem();
    console.log ('hi addGroup click');
   // (clickedButton)="onButtonSelect($event)"
   //  this.groupIdSelect = groupId;
   // console.log('click on a group which is:' + groupId);
  }

  onRmvButtonClick() {
    this.logic.removeMovieItem();
    console.log ('hi removeGroup click');
    // (clickedButton)="onButtonSelect($event)"
   //  this.groupIdSelect = groupId;
   //  console.log('click on a group which is:' + groupId);
   }



}
