import { ButtonComponent } from './../button/button.component';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MovieGroup } from 'src/app/models/movie-group';
import { LogicService } from 'src/app/service-layer/logic.service';
import { IAppState } from 'src/app/state-managment/states';
import { Store } from '@ngrx/store';
import * as selectors from '../../state-managment/states';
import { selectGroupId } from '../../state-managment/actions/movie-group.action';
<<<<<<< HEAD
import * as actions from '../../state-managment/actions/movie-group.action';
=======
import * as actions from './../../state-managment/actions/movie-group.action';


>>>>>>> Sina/ngrx-reducer

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  public groupList: MovieGroup[];
  public readonly addButtonLabel = 'Add';
<<<<<<< HEAD
  public readonly removeButtonLabel = 'Remove';

=======
  public readonly removeButtonLabel = 'Rmv';
  private selectedId: number;
>>>>>>> Sina/ngrx-reducer
  @Output()
  groupSelectId: EventEmitter<number> = new EventEmitter();


  constructor(private store: Store<IAppState>) {

    // logic.groupListSubject.asObservable().subscribe(list => this.fromGroupList(list));
        }

  ngOnInit(): void {
    this.store.select(selectors.selectGroupList).subscribe(list => this.fromGroupList(list));
     }

  private fromGroupList(list: MovieGroup[]): void {
    this.groupList = list;
<<<<<<< HEAD
  }
=======
     }
>>>>>>> Sina/ngrx-reducer

  onAddButtonClick() {
   // this.logic.addGroup();
    console.log ('hi addGroup click');
    this.store.dispatch(actions.createMovieGroup({
      group: new MovieGroup()
    }));
   // (clickedButton)="onButtonSelect($event)"
   // this.groupIdSelect = groupId;
   // console.log('click on a group which is:' + groupId);
    this.store.dispatch(actions.createMovieGroup({group: new MovieGroup()}));
      }

      onGroupSelect(idSelect: number) {
      this.selectedId = idSelect;
      }

  onRmvButtonClick() {
    // this.logic.removeGroup();
    console.log ('hi removeGroup click');
    // (clickedButton)="onButtonSelect($event)"
   //  this.groupIdSelect = groupId;
   //  console.log('click on a group which is:' + groupId);
    this.store.dispatch(actions.removeGroup({ selectedId: this.selectedId }));
   }

}
