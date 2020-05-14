import { HttpServiceService as HttpService } from './../../service-layer/http-service.service';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as actions from '../actions/movie-item.action';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
export class MovieItemEffects {
 
  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) {}


    loadMovies$ = createEffect(() =>
  this.actions$.pipe(
    ofType(actions.loadMovieItemList),
    mergeMap(() =>
      this.httpService.getMovieItemList().pipe(
        map(data => {
          return actions.loadMovieItemListSuccess({items: data});
        }),
        catchError((error: Error) => {
          return of(actions.loadMovieItemListFailed(error));
        })
      )
    )
  )
);


}
