import { MovieItem } from 'src/app/models/movie-item';
import { MovieGroup } from './../../models/movie-group';
import { createAction, props } from '@ngrx/store';


export enum MovieGroupActionName {

        LoadGroupList = '[MovieGroup] Load MovieGroup List',
        LoadGroupListSuccess = '[MovieGroup] Load MovieGroup List Success',
        LoadGroupListFailed = '[MovieGroup] Load MovieGroup List Failed',
        Create = '[MovieGroup] Create MovieGroup',
        CreateSuccess = '[MovieGroup] Create MovieGroup Success',
        CreateFailed  = '[MovieGroup] Create MovieGroup Failed',
        SelectGroupId = '[MovieGroup] Select GroupId',
        Remove        = '[MovieGroup] Remove MovieGroup',
        RemoveSuccess = '[MovieGroup] Remove MovieGroup Success',
        RemoveFailed  = '[MovieGroup] Remove MovieGroup Failed',
}


export const loadGroupList = createAction(MovieGroupActionName.LoadGroupList);
export const loadGroupListSuccess = createAction(MovieGroupActionName.LoadGroupListSuccess,
        props<{groups: MovieGroup[]}>());
export const loadGroupListFailed = createAction(MovieGroupActionName.LoadGroupListFailed,
        props<{message: string}>());

export const createMovieGroup = createAction(MovieGroupActionName.Create,
        props<{group: MovieGroup}>()); // method
export const createMovieGroupSuccess = createAction(MovieGroupActionName.CreateSuccess,
        props<{group: MovieGroup}>());
export const createMovieGroupFailed = createAction(MovieGroupActionName.CreateFailed,
        props<{message: string}>());

export const selectGroupId = createAction(MovieGroupActionName.SelectGroupId,
        props<{selectedGroupId: number}>()); // method

export const removeGroup = createAction(MovieGroupActionName.Remove,
        props<{ selectedId: number }>());
export const removeSuccess = createAction(MovieGroupActionName.RemoveSuccess,
        props<{groups: MovieGroup[]}>());
export const removeFailed = createAction(MovieGroupActionName.RemoveFailed,
        props<{message: string}>());

