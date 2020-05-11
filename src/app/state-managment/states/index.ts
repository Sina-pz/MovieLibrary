import { createSelector } from '@ngrx/store';
import { IMovieItemState, getFilteredMovieItemList, getSelectedMovieItemId, getMovieItemList } from './movie-item.state';
import { IMovieGroupState, getGroupList, getSelectedGroupId } from './movie-group.state';

export interface IAppState {
    // reducer?: RouterReducerState;
    movieGroupState: IMovieGroupState;
    movieItemState: IMovieItemState;
}

export const selectMovieGroupState = (state: IAppState) => state.movieGroupState;
export const selectGroupList = createSelector(selectMovieGroupState, getGroupList); //  1- main state branch 2- exact func relate
export const selectSelectedGroupId = createSelector(selectMovieGroupState, getSelectedGroupId);

export const selectMovieItemState = (state: IAppState) => state.movieItemState;
export const selectFilteredMovieItemList = createSelector(selectMovieItemState, getFilteredMovieItemList);
export const selectSelectedMovieItemId = createSelector(selectMovieItemState, getSelectedMovieItemId);
export const selectMovieItemList = createSelector(selectMovieItemState, getMovieItemList);
