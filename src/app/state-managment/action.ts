import { MovieItem } from 'src/app/models/movie-item';
import { MovieGroup } from './../models/movie-group';
import { createAction, props } from '@ngrx/store';


export enum MovieGroupActionName {
    Create = '[MovieGroup] Create MovieGroup',
    CreateSuccess = '[MovieGroup] Create MovieGroup Success',
    CreateFailed = '[MovieGroup] Create MovieGroup Failed'
}

export enum MovieItemActionName {
    Create = '[MovieItem] Create MovieItem',
    CreateSuccess = '[MovieItem] Create MovieItem Success',
    CreateFailed = '[MovieItem] Create MovieItem Failed'
}


export const createMovieGroup = createAction(MovieItemActionName.Create,
        props<{group: MovieGroup}>());
export const createMovieGroupSuccess = createAction(MovieGroupActionName.CreateSuccess,
        props<{group: MovieGroup}>());
export const createMovieGroupFailed = createAction(MovieGroupActionName.CreateFailed);

export const createMovieItem = createAction(MovieItemActionName.Create,
    props<{Item: MovieItem}>());
export const createMovieItemSuccess = createAction(MovieItemActionName.CreateSuccess,
    props<{Item: MovieItem}>());
export const createMovieItemFailed = createAction(MovieItemActionName.CreateFailed);





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
