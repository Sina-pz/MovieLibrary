import * as actions from './../actions/movie-item.action';
import { createReducer, on } from '@ngrx/store';
import { initialMovieItemState } from '../states/movie-item.state';

export const _movieItemReducer = createReducer(
  initialMovieItemState,
  on(actions.createMovieItem, (oldState) => oldState),
  on(actions.createMovieItemSuccess, (oldState, action) => {
    const newGroupList = oldState.movieItemList.map((item) => item);
    newGroupList.push(action.Item);

    return {
      ...oldState,
      groupList: newGroupList,
    };
  }),
  on(actions.createMovieItemFailed),
  ///////////////////////////////////////////////////////////////////
  on(actions.getFilteredMovieItemList),
  on(actions.getFilteredMovieItemListSuccess, (oldState, action) => {
    return {
      ...oldState,
      groupList: action.Items
    };
  }),
  on(actions.getFilteredMovieItemListFailed)

);

export function movieItemReducer(oldState, action) {
  return _movieItemReducer(oldState, action);
}
