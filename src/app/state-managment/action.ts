import { MovieItem } from 'src/app/models/movie-item';
import { Action } from '@ngrx/store';
import { MovieGroup } from '../models/movie-group';



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

export class CreateMoveGroup implements Action {
    public readonly type = MovieGroupActionName.Create;
    constructor(public group: MovieGroup) {}
}

export class CreateMoveGroupSuccess implements Action {
    public readonly type = MovieGroupActionName.CreateSuccess;
    constructor(public group: MovieGroup) {}
}

export class CreateMoveGroupFailed implements Action {
    public readonly type = MovieGroupActionName.CreateFailed;
    constructor() {}
}

export class CreateMoveItem implements Action {
    public readonly type = MovieItemActionName.Create;
    constructor(public item: MovieItem) {}
}

export class CreateMoveItemSuccess implements Action {
    public readonly type = MovieItemActionName.CreateSuccess;
    constructor(public item: MovieItem) {}
}

export class CreateMoveItemFailed implements Action {
    public readonly type = MovieItemActionName.CreateFailed;
    constructor() {}
}

export type MovieGroupAction = CreateMoveGroup | CreateMoveGroupSuccess | CreateMoveGroupFailed;
export type MovieItemAction  = CreateMoveItem  | CreateMoveItemSuccess  | CreateMoveItemFailed;

