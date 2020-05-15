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

}


export const loadMovieItemList = createAction(MovieItemActionName.LoadMovieItemList);
export const loadMovieItemListSuccess = createAction(MovieItemActionName.LoadMovieItemSuccess,
    props<{items: MovieItem[]}>());
export const loadMovieItemListFailed = createAction(MovieItemActionName.LoadMovieItemFailed,
   props<{message: string}>());

export const createMovieItem = createAction(MovieItemActionName.Create);
//    props<{Item: MovieItem}>()); // method ???????
export const createMovieItemSuccess = createAction(MovieItemActionName.CreateSuccess,
    props<{item: MovieItem}>());
export const createMovieItemFailed = createAction(MovieItemActionName.CreateFailed,
    props<{message: string}>());

export const filterMovieItemList = createAction(MovieItemActionName.FilterMovieItemList,
    props<{selectedGroupId: number}>());

export const selectMovieItem = createAction(MovieItemActionName.selectMovieItem,
    props<{ selectedId: number }>());
