import { createSelector } from '@ngrx/store';
// tslint:disable-next-line: max-line-length
import { IMovieItemState, getFilteredMovieItemList, getSelectedMovieItem, getMovieItemList, getFilteredMovieItemListNumber, getSearchedMovieItem } from './movie-item.state';
import { IMovieGroupState, getGroupList, getSelectedGroupId, getSelectedGroup } from './movie-group.state';

export interface IAppState {
    movieGroupState: IMovieGroupState;
    movieItemState: IMovieItemState;
  }

export const selectMovieGroupState = (state: IAppState) => state.movieGroupState;
export const selectGroupList = createSelector(selectMovieGroupState, getGroupList); //  1- main state branch 2- exact func relate
export const selectSelectedGroupId = createSelector(selectMovieGroupState, getSelectedGroupId);
export const selectSelectedGroup = createSelector(selectMovieGroupState, getSelectedGroup );

export const selectMovieItemState = (state: IAppState) => state.movieItemState;
export const selectFilteredMovieItemList = createSelector(selectMovieItemState, getFilteredMovieItemList);
export const selectFilteredMovieItemListNumber = createSelector(selectMovieItemState, getFilteredMovieItemListNumber);
export const selectSelectedMovieItem = createSelector(selectMovieItemState, getSelectedMovieItem);
export const selectMovieItemList = createSelector(selectMovieItemState, getMovieItemList);
export const selectSearchedMovieItem = createSelector(selectMovieItemState, getSearchedMovieItem);



