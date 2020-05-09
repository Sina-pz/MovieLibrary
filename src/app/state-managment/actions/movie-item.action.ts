import { MovieItem } from 'src/app/models/movie-item';
import { createAction, props } from '@ngrx/store';



export enum MovieItemActionName {
    Create = '[MovieItem] Create MovieItem',
    CreateSuccess = '[MovieItem] Create MovieItem Success',
    CreateFailed = '[MovieItem] Create MovieItem Failed',
    GetFilteredMovieItemList = '[MovieItem] Get GetFilteredMovieItem List',
    GetFilteredMovieItemListSuccess = '[MovieItem] Get GetFilteredMovieItem List Success',
    GetFilteredMovieItemListFailed = '[MovieItem] Get GetFilteredMovieItem List Failed',
}


export const createMovieItem = createAction(MovieItemActionName.Create,
    props<{Item: MovieItem}>());
export const createMovieItemSuccess = createAction(MovieItemActionName.CreateSuccess,
    props<{Item: MovieItem}>());
export const createMovieItemFailed = createAction(MovieItemActionName.CreateFailed);


export const getFilteredMovieItemList = createAction(MovieItemActionName.GetFilteredMovieItemList);
export const getFilteredMovieItemListSuccess = createAction(MovieItemActionName.GetFilteredMovieItemListSuccess,
    props<{Items: MovieItem[]}>());
export const getFilteredMovieItemListFailed = createAction(MovieItemActionName.GetFilteredMovieItemListFailed);
