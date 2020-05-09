import { createSelector } from '@ngrx/store';
import { IMovieItemState } from './movie-item.state';
import { IMovieGroupState, getGroupList, getSelectedGroupId } from './movie-group.state';



export interface IAppState {
    // reducer?: RouterReducerState;
    movieGroupState: IMovieGroupState;  // yek variable az noe interface kamel, yani khodesh 2 ta variable states dare
    movieItemState: IMovieItemState;
}


export const selectMovieGroupState = (state: IAppState) => state.movieGroupState;
export const selectGroupList = createSelector(selectMovieGroupState, getGroupList);
export const selectSelectedGroupId = createSelector(selectMovieGroupState, getSelectedGroupId);


