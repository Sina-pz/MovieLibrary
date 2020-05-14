import { MovieItem } from 'src/app/models/movie-item';
import { MovieGroup } from './../../models/movie-group';
import { createAction, props } from '@ngrx/store';


export enum MovieGroupActionName {

    Create = '[MovieGroup] Create MovieGroup',
    CreateSuccess = '[MovieGroup] Create MovieGroup Success',
    CreateFailed = '[MovieGroup] Create MovieGroup Failed',
    LoadGroupList = '[MovieGroup] Load MovieGroup List',
    LoadGroupListSuccess = '[MovieGroup] Load MovieGroup List Success',
    LoadGroupListFailed = '[MovieGroup] Load MovieGroup List Failed',
    SelectGroupId = '[MovieGroup] Select GroupId',
}

export const createMovieGroup = createAction(MovieGroupActionName.Create,
        props<{group: MovieGroup}>()); // method
export const createMovieGroupSuccess = createAction(MovieGroupActionName.CreateSuccess,
        props<{group: MovieGroup}>());
export const createMovieGroupFailed = createAction(MovieGroupActionName.CreateFailed);


export const loadGroupList = createAction(MovieGroupActionName.LoadGroupList);
export const loadGroupListSuccess = createAction(MovieGroupActionName.LoadGroupListSuccess,
        props<{groups: MovieGroup[]}>());
export const loadGroupListFailed = createAction(MovieGroupActionName.LoadGroupListFailed);

export const selectGroupId = createAction(MovieGroupActionName.SelectGroupId,
        props<{groupId: number}>()); // method

