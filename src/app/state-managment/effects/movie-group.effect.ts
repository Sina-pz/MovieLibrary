import { filterMovieItemList } from './../actions/movie-item.action';
import { HttpService as HttpService } from './../../service-layer/http-service.service';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as actions from '../actions/movie-group.action';
import * as movieItemActions from '../actions/movie-item.action';
import { of } from 'rxjs';

import { mergeMap, map, catchError } from 'rxjs/operators';

// COMMAND: ng generate effect movieGroup - root -m app.module.ts
@Injectable()
export class MovieGroupEffects {

  constructor(
    private actions$: Actions,
    private httpService: HttpService
   ) { }

  loadGroups$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadGroupList),
    mergeMap(() => this.httpService.getMovieGroupList().pipe(
      map(groupList => {
        return actions.loadGroupListSuccess({ groups: groupList });
      }),
      catchError((error: Error) => {
        return of(actions.loadGroupListFailed(error));
      })
    ))));
  //////////////////
  creatGroup$ = createEffect(() => this.actions$.pipe(
    ofType(actions.createMovieGroup),
    mergeMap(action => this.httpService.creatGroup(action.group).pipe(
      map(movieGroup => {
        return actions.createMovieGroupSuccess({ group: movieGroup });
      }), catchError((error: Error) => {
        return of(actions.createMovieGroupFailed(error));
      })))));
  //////////
  removeGroup$ = createEffect(() => this.actions$.pipe(
    ofType(actions.removeGroup),
    // mergeMap(action => this.httpService.removeGroup(action.selectedId, action.updatedGroupList).pipe(
       mergeMap(action => this.httpService.removeGroup().pipe(
       map(message => {
        return actions.removeGroupSuccess({ successMessage: message });
      }), catchError((error: Error) => {
        return of(actions.removeGroupFailed(error));
      })))));
   ///////////////////
  // filter movieItems on selectedGroupId
  selectGroup$ = createEffect(() => this.actions$.pipe(
    ofType(actions.selectGroupId),
    map(action => movieItemActions.filterMovieItemList({ selectedGroupId: action.selectedGroupId }))));
  //////////////////
  editGroup$ = createEffect(() => this.actions$.pipe(
    ofType(actions.editMovieGroup),
    mergeMap(action => this.httpService.editGroup(action.group).pipe(
      map(newGroup => {
        return actions.editMovieGroupSuccess({ group: newGroup });
      }), catchError((error: Error) => {
        return of(actions.editMovieGroupFailed(error));
      })))));
  //////////////////




}
