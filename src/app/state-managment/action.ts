import { MovieGroup } from './../models/movie-group';
import { Action, createAction, props } from '@ngrx/store';


export enum MovieGroupActionName {
    Create = '[MovieGroup] Create MovieGroup',
    CreateSuccess = '[MovieGroup] Create MovieGroup Success',
    CreateFailed = '[MovieGroup] Create MovieGroup Failed'
}

export const createMovieGroup = createAction(MovieGroupActionName.Create,
        props<{group: MovieGroup}>());
export const createMovieGroupSuccess = createAction(MovieGroupActionName.CreateSuccess,
        props<{group: MovieGroup}>());
export const createMovieGroupFailed = createAction(MovieGroupActionName.CreateFailed);



// export class CreateMoveGroup implements Action {
//     public readonly type = MovieGroupActionName.Create;
//     constructor(public group: MovieGroup) {}
// }

// export class CreateMoveGroupSuccess implements Action {
//     public readonly type = MovieGroupActionName.CreateSuccess;
//     constructor(public group: MovieGroup) {}
// }

// export class CreateMoveGroupFailed implements Action {
//     public readonly type = MovieGroupActionName.CreateFailed;
//     constructor() {}
// }

// export type MovieGroupAction = CreateMoveGroup | CreateMoveGroupSuccess | CreateMoveGroupFailed;
