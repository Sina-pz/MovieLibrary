import { filterMovieItemList, enumerateFilterMovieItemList } from './../../../state-managment/actions/movie-item.action';
import { selectGroupId, selectGroup,  } from './../../../state-managment/actions/movie-group.action';
import { LogicService } from './../../../service-layer/logic.service';
import { MovieGroup } from './../../../models/movie-group';
import { IAppState } from './../../../state-managment/states/index';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as selectors from '../../../state-managment/states';

@Component({
  selector: 'app-group-row',
  templateUrl: './group-row.component.html',
  styleUrls: ['./group-row.component.css']
})
export class GroupRowComponent implements OnInit {

  public filterMovieItemListNumber: number;
  public filterMovieItemListNumberList: number[];
  private iter = 0;
  @Input()  selected: boolean;
  @Input()  group: MovieGroup;
  @Output() idSelect: EventEmitter<number> = new EventEmitter();

  constructor(private logic: LogicService, private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(filterMovieItemList({selectedGroupId: this.group.id}));
    this.store.dispatch(enumerateFilterMovieItemList({selectedGroupId: this.group.id}));
  //  this.store.select(selectors.selectFilteredMovieItemListNumber).subscribe(number => this.fromMovieItemListNumber(number) );
    }


    // fromMovieItemListNumber(number: number) {
    //   this.iter++;
    //   this.filterMovieItemListNumber = number;
    //   this.filterMovieItemListNumberList[this.iter] = number;
    // //  console.log(this.iter);
    // //  console.log(this.filterMovieItemListNumberList[this.iter]);
    //   }

  onClick() {
    if (this.group) {
      // const groupId: number = this.group.id;
      // this.logic.updateFilteredItemsByGroupId(this.group.id); //props<{groupId: number}>()); // method
      // this.store.dispatch(selectGroupId(props:{this.group.id}));  (props: P & NotAllowedCheck<P>)
         this.store.dispatch(selectGroupId({selectedGroupId: this.group.id}));
         this.store.dispatch(selectGroup({selectedGroup: this.group}));
         // console.log('hi selectedGroupId click' + this.group.id );
         // this.props.Store.dispatch(selectGroupId(this.group.id));
         this.idSelect.emit(this.group.id);
    }
  }
}
