import { MovieItem } from './../../models/movie-item';
import { createAction, props } from '@ngrx/store';
import { NumberSymbol } from '@angular/common';



export enum MovieItemActionName {

    LoadMovieItemList = '[MovieItem] Get MovieItem List',
    LoadMovieItemSuccess = '[MovieItem] Get MovieItem List Success',
    LoadMovieItemFailed = '[MovieItem] Get MovieItem List Failed',
    Create = '[MovieItem] Create MovieItem',
    CreateSuccess = '[MovieItem] Create MovieItem Success',
    CreateFailed = '[MovieItem] Create MovieItem Failed',
    FilterMovieItemList = '[MovieItem] Filter MovieItemList',
    EnumerateFilterMovieItemList = '[MovieItem] Enumerate Filter MovieItemList',
    selectMovieItem = '[MovieItem] Select MovieItem',
    Remove        = '[MovieGroup] Remove MovieItem',
    RemoveSuccess = '[MovieGroup] Remove MovieItem Success',
    RemoveFailed  = '[MovieGroup] Remove MovieItem Failed',
    Edit          = '[MovieGroup] Edit MovieItem',
    EditSuccess   = '[MovieGroup] Edit MovieItem Success',
    EditFailed    = '[MovieGroup] Edit MovieItem Failed',
    Find          = '[MovieGroup] Find MovieItem',
}

export const loadMovieItemList = createAction(MovieItemActionName.LoadMovieItemList);
export const loadMovieItemListSuccess = createAction(MovieItemActionName.LoadMovieItemSuccess,
    props<{ items: MovieItem[] }>());
export const loadMovieItemListFailed = createAction(MovieItemActionName.LoadMovieItemFailed,
    props<{ message: string }>());

export const createMovieItem = createAction(MovieItemActionName.Create,
    props<{ item: MovieItem, selectedGroupId: number}>());
export const createMovieItemSuccess = createAction(MovieItemActionName.CreateSuccess,
    props<{ item: MovieItem, selectedGroupId: number}>());
export const createMovieItemFailed = createAction(MovieItemActionName.CreateFailed,
    props<{ message: string }>());

export const filterMovieItemList = createAction(MovieItemActionName.FilterMovieItemList,
    props<{ selectedGroupId: number }>());
export const enumerateFilterMovieItemList = createAction(MovieItemActionName.EnumerateFilterMovieItemList,
    props<{selectedGroupId: number}>());

export const selectMovieItem = createAction(MovieItemActionName.selectMovieItem,
    props<{ selectedMovieItem: MovieItem }>());

export const removeItem = createAction(MovieItemActionName.Remove);
    // props<{ selectedMovieItemId: number; filteredMovieItemList: MovieItem[] }>());
export const removeItemSuccess = createAction(MovieItemActionName.RemoveSuccess,
    props<{ successMessage: boolean }>());
export const removeItemFailed = createAction(MovieItemActionName.RemoveFailed,
    props<{ message: string }>());

export const editMovieItem = createAction(MovieItemActionName.Edit,
        props<{ item: MovieItem }>());
export const editMovieItemSuccess = createAction(MovieItemActionName.EditSuccess,
    props<{ item: MovieItem }>());
export const editMovieItemFailed = createAction(MovieItemActionName.EditFailed,
    props<{ message: string }>());

export const findSearchedMovieItem = createAction(MovieItemActionName.Find,
    props<{ searchedMovieItemName: string }>());
