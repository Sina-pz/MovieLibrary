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

}


export const loadMovieItemList = createAction(MovieItemActionName.LoadMovieItemList);
export const loadMovieItemListSuccess = createAction(MovieItemActionName.LoadMovieItemSuccess,
    props<{items: MovieItem[]}>());
export const loadMovieItemListFailed = createAction(MovieItemActionName.LoadMovieItemFailed);

export const createMovieItem = createAction(MovieItemActionName.Create,
    props<{Item: MovieItem}>()); // method
export const createMovieItemSuccess = createAction(MovieItemActionName.CreateSuccess,
    props<{Item: MovieItem}>());
export const createMovieItemFailed = createAction(MovieItemActionName.CreateFailed);

export const filterMovieItemList = createAction(MovieItemActionName.FilterMovieItemList,
    props<{items: MovieItem[]}>());
