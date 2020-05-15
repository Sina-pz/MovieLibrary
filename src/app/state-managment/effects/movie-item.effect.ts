import { createMovieGroupSuccess } from './../actions/movie-group.action';
import { MovieItemActionName, createMovieItemFailed, createMovieItemSuccess } from './../actions/movie-item.action';
import { HttpServiceService as HttpService } from './../../service-layer/http-service.service';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';  // ??????/ add nashode ke
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
      this.httpService.getMovieItemList().pipe(   // get sth from service amd give it to action 
        map(data => {
          return actions.loadMovieItemListSuccess({items: data}); // yek property khali az action tavasote service populate mishe
        }), // 1
        catchError((error: Error) => {
          return of(actions.loadMovieItemListFailed(error));
        })  //
      )
    )
  )
);
///////////////////
creatMovie$ = createEffect(() =>
this.actions$.pipe(
  ofType(actions.createMovieItem),
  mergeMap(() =>
    this.httpService.creatMovieItem().pipe(
      map(data => {
        return actions.createMovieItemSuccess({item: data});
      }),
      catchError((error: Error) => {
        return of(actions.createMovieItemFailed(error));
      })
    )
  )
)
);
//////////////////
filterMovies$ = createEffect(() =>
this.actions$.pipe(
  ofType(actions.filterMovieItemList),
  actions.filterMovieItemList({selectedGroupId: number})
  )
);
///////////////
selectMovie$ = createEffect(() =>
this.actions$.pipe(
  ofType(actions.selectMovieItem),
  actions.selectMovieItem({selectedId: number})
  )
);
//////////////////



}
