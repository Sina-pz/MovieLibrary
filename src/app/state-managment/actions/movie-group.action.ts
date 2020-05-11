import { MovieItem } from 'src/app/models/movie-item';
import { MovieGroup } from './../../models/movie-group';
import { createAction, props } from '@ngrx/store';


export enum MovieGroupActionName {

    Create = '[MovieGroup] Create MovieGroup',
    CreateSuccess = '[MovieGroup] Create MovieGroup Success',
    CreateFailed = '[MovieGroup] Create MovieGroup Failed',
    GetGroupList = '[MovieGroup] Get MovieGroup List',
    GetGroupListSuccess = '[MovieGroup] Get MovieGroup List Success',
    GetGroupListFailed = '[MovieGroup] Get MovieGroup List Failed',
}

export const createMovieGroup = createAction(MovieGroupActionName.Create,
        props<{group: MovieGroup}>()); // method
export const createMovieGroupSuccess = createAction(MovieGroupActionName.CreateSuccess,
        props<{group: MovieGroup}>());
export const createMovieGroupFailed = createAction(MovieGroupActionName.CreateFailed);


export const getGroupList = createAction(MovieGroupActionName.GetGroupList);
export const getGroupListSuccess = createAction(MovieGroupActionName.GetGroupListSuccess,
        props<{groups: MovieGroup[]}>());
export const getGroupListFailed = createAction(MovieGroupActionName.GetGroupListFailed);




