import { MovieItem } from 'src/app/models/movie-item';
import { createAction, props } from '@ngrx/store';



export enum MovieItemActionName {

    LoadMovieItemList = '[MovieItem] Get MovieItem List',
    LoadMovieItemSuccess = '[MovieItem] Get MovieItem List Success',
    LoadMovieItemFailed = '[MovieItem] Get MovieItem List Failed',
    Create = '[MovieItem] Create MovieItem',
    CreateSuccess = '[MovieItem] Create MovieItem Success',
    CreateFailed = '[MovieItem] Create MovieItem Failed',
    FilterMovieItemList = '[MovieItem] Filter MovieItemList',
    selectMovieItem = '[MovieItem] Select MovieItem',
    Remove        = '[MovieGroup] Remove MovieItem',
    RemoveSuccess = '[MovieGroup] Remove MovieItem Success',
    RemoveFailed  = '[MovieGroup] Remove MovieItem Failed',

}


export const loadMovieItemList = createAction(MovieItemActionName.LoadMovieItemList);
export const loadMovieItemListSuccess = createAction(MovieItemActionName.LoadMovieItemSuccess,
    props<{ items: MovieItem[] }>());
export const loadMovieItemListFailed = createAction(MovieItemActionName.LoadMovieItemFailed,
    props<{ message: string }>());

export const createMovieItem = createAction(MovieItemActionName.Create,
    props<{ item: MovieItem }>());
export const createMovieItemSuccess = createAction(MovieItemActionName.CreateSuccess,
    props<{ item: MovieItem }>());
export const createMovieItemFailed = createAction(MovieItemActionName.CreateFailed,
    props<{ message: string }>());

export const filterMovieItemList = createAction(MovieItemActionName.FilterMovieItemList,
    props<{ selectedGroupId: number }>());

export const selectMovieItem = createAction(MovieItemActionName.selectMovieItem,
    props<{ selectedId: number }>());

export const removeItem = createAction(MovieItemActionName.Remove,
    props<{ selectedMovieItemId: number }>());
export const removeItemSuccess = createAction(MovieItemActionName.RemoveSuccess,
    props<{ items: MovieItem[] }>());
export const removeItemFailed = createAction(MovieItemActionName.RemoveFailed,
    props<{ message: string }>());
