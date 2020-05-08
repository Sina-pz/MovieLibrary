// import { IMovieItemState, initialMovieItemState } from './movie-item.state';
import { IMovieGroupState, initialMovieGroupState } from './movie-group.state';

import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
    reducer?: RouterReducerState;
    movieGroupState: IMovieGroupState;  // yek variable az noe interface kamel, yani khodesh 2 ta variable states dare
   // movieItemState: IMovieItemState;
}

export const initialAppState: IAppState = {
    movieGroupState: initialMovieGroupState,  // in yani chi? variable az noe yevariable dige ~
    // movieItemState: initialMovieItemState
};

