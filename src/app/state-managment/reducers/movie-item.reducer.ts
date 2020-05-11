import * as actions from './../actions/movie-item.action';
import { createReducer, on } from '@ngrx/store';
import { initialMovieItemState } from '../states/movie-item.state';

export const _movieItemReducer = createReducer(initialMovieItemState,
  on(actions.createMovieItem),
  on(actions.createMovieItemSuccess, (oldState, action) => {
    const newMovieItemList = oldState.movieItemList.map(item => item);
    newMovieItemList.push(action.Item);

    return {
      ...oldState,
      movieItemList: newMovieItemList,
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
  on(actions.getFilteredMovieItemListFailed),
  ///////////////////////////////////////////////////////////////////
  on(actions.getMovieItemList),
  on(actions.getMovieItemListSuccess, (oldState, action) => {
    return {
      ...oldState,
      groupList: action.items
    };
  }),
  on(actions.getMovieItemListFailed),

);

export function movieItemReducer(oldState, action) {
  return _movieItemReducer(oldState, action);
}
