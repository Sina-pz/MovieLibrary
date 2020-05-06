import { IMovieGroupState, initialMovieGroupState } from './movie-group.state';

import * as fromRouter from '@ngrx/router-store';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
    reducer?: RouterReducerState;
    movieGroupState: IMovieGroupState;
}

export const initialAppState: IAppState = {
    movieGroupState: initialMovieGroupState
};

