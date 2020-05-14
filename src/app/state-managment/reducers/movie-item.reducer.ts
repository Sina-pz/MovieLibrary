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
  on(actions.loadMovieItemList),
  on(actions.loadMovieItemListSuccess, (oldState, action) => {
    return {
      ...oldState,
      groupList: action.items
    };
  }),
  on(actions.loadMovieItemListFailed),
  ///////////////////////////////////////////////////////////////////
  on(actions.filterMovieItemList, (oldState, action) => {
    return {
      ...oldState,
      filteredMovieItemList: oldState.movieItemList.filter(item => item.groupId === action.selectedGroupId )
    };
  }),

);

export function movieItemReducer(oldState, action) {
  return _movieItemReducer(oldState, action);
}
