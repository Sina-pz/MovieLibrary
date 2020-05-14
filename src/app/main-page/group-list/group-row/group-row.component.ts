import { selectGroupId } from './../../../state-managment/actions/movie-group.action';
import { LogicService } from './../../../service-layer/logic.service';
import { MovieGroup } from './../../../models/movie-group';
import { IAppState } from './../../../state-managment/states/index';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store, props } from '@ngrx/store';

@Component({
  selector: 'app-group-row',
  templateUrl: './group-row.component.html',
  styleUrls: ['./group-row.component.css']
})
export class GroupRowComponent implements OnInit {

  @Input()
  group: MovieGroup;

  constructor(private logic: LogicService, private store: Store<IAppState>) {
   }

  ngOnInit(): void {
  }

  onClick() {
    if (this.group) {
      // const groupId: number = this.group.id;
      // this.logic.updateFilteredItemsByGroupId(this.group.id); //props<{groupId: number}>()); // method
      // this.store.dispatch(selectGroupId(props:{this.group.id}));  (props: P & NotAllowedCheck<P>)
      this.store.dispatch(selectGroupId({selectedGroupId: this.group.id}));
      // this.props.Store.dispatch(selectGroupId(this.group.id));
    }
  }
}
