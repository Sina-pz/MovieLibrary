import { createMovieGroupSuccess, selectGroupId } from './../actions/movie-group.action';
import { MovieItemActionName, createMovieItemFailed, createMovieItemSuccess } from './../actions/movie-item.action';
import { HttpService as HttpService } from './../../service-layer/http-service.service';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';  // ??????/ add nashode ke
import * as actions from '../actions/movie-group.action';
import * as movieItemActions from '../actions/movie-item.action';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
export class MovieItemEffects {

  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) {}


  loadGroups$ = createEffect(() =>
  this.actions$.pipe(
    ofType(actions.loadGroupList),
    mergeMap(() =>
      this.httpService.getMovieGroupList().pipe(
        map(data => {
          return actions.loadGroupListSuccess({groups: data});
        }), // 1
        catchError((error: Error) => {
          return of(actions.loadGroupListFailed(error));
        })  //
      )
    )
  )
);
//////////////////
creatGroup$ = createEffect(() =>
this.actions$.pipe(
  ofType(actions.createMovieGroup),
  mergeMap(() =>
    this.httpService.creatGroup().pipe(
      map(data => {
        return actions.createMovieGroupSuccess({group: data});
      }),
      catchError((error: Error) => {
        return of(actions.createMovieGroupFailed(error));
      })
    )
  )
)
);
//////////
selectGroup$ = createEffect(() =>
// filter MovieItems on SelectGroupId
this.actions$.pipe(
  ofType(actions.selectGroupId),
  map(action => movieItemActions.filterMovieItemList({selectedGroupId: action.selectedGroupId}) )
  )
);

}
