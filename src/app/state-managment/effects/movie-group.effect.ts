import { HttpService as HttpService } from './../../service-layer/http-service.service';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as actions from '../actions/movie-group.action';
import * as movieItemActions from '../actions/movie-item.action';

@Injectable()
export class MovieGroupEffects {

  constructor(
    private actions$: Actions,
    private httpService: HttpService
   ) { }

  loadGroups$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadGroupList),
    mergeMap(() => this.httpService.getMovieGroupList().pipe(
      map(data => {
        return actions.loadGroupListSuccess({ groups: data });
      }), // 1
      catchError((error: Error) => {
        return of(actions.loadGroupListFailed(error));
      }) //
    ))));
  //////////////////
  creatGroup$ = createEffect(() => this.actions$.pipe(
    ofType(actions.createMovieGroup),
    mergeMap(action => this.httpService.creatGroup().pipe(
      map(data => {
        return actions.createMovieGroupSuccess({ group: data });
      }), catchError((error: Error) => {
        return of(actions.createMovieGroupFailed(error));
      })))));
  //////////
  ///////////////////
  removeGroup$ = createEffect(() => this.actions$.pipe(
    ofType(actions.removeGroup),
    mergeMap(action => this.httpService.removeGroup(action.selectedId).pipe(
      map(movieGroups => {
        return actions.removeSuccess({ groups: movieGroups });
      }), catchError((error: Error) => {
        return of(actions.removeFailed(error));
      })))));
  // filter movieItems on selectedGroupId
  selectGroup$ = createEffect(() => this.actions$.pipe(
    ofType(actions.selectGroupId),
    map(action => movieItemActions.filterMovieItemList({ selectedGroupId: action.selectedGroupId }))));
}
