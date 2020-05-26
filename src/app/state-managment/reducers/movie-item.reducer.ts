import * as actions from './../actions/movie-item.action';
import { createReducer, on } from '@ngrx/store';
import { initialMovieItemState } from '../states/movie-item.state';

// tslint:disable-next-line: variable-name
export const _movieItemReducer = createReducer(initialMovieItemState,
  on(actions.createMovieItem),
  on(actions.createMovieItemSuccess, (oldState, action) => {
    const newMovieItemList = oldState.movieItemList.map(item => item);
    newMovieItemList.push(action.item);

    return {
      ...oldState,
      movieItemList: newMovieItemList,
    };
  }),
  on(actions.createMovieItemFailed),
  ///////////////////////////////////
  on(actions.removeItem),
  on(actions.removeItemSuccess, oldState => {
    const temporaryMovieItemList = oldState.filteredMovieItemList.map(group => group);
    if (oldState.selectedMovieItemId) {
      const newMovieItemList = temporaryMovieItemList.filter(group => group.id !== oldState.selectedMovieItemId);

      return {
        ...oldState,
        filteredMovieItemList: newMovieItemList };
  }}),
  on(actions.removeItemFailed),
  ///////////////////////////////////////////////////////////////////
  on(actions.loadMovieItemList),
  on(actions.loadMovieItemListSuccess, (oldState, action) => {
    return {
      ...oldState,
      movieItemList: action.items
    };
  }),
  on(actions.loadMovieItemListFailed),
  ///////////////////////////////////////////////////////////////////
  on(actions.filterMovieItemList, (oldState, action) => {
    return {
      ...oldState,
      filteredMovieItemList: oldState.movieItemList.filter(item => item.groupId === action.selectedGroupId)
    };
  }),
  /////////
  on(actions.selectMovieItem, (oldState, action) => {
    return {
      ...oldState,
      selectedMovieItemId: action.selectedId
    };
  })


);

export function movieItemReducer(oldState, action) {
  return _movieItemReducer(oldState, action);
}
