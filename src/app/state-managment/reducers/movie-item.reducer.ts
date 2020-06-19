import { MovieItem } from './../../models/movie-item';
import { getFilteredMovieItemListNumber } from './../states/movie-item.state';
import * as actions from './../actions/movie-item.action';
import { createReducer, on } from '@ngrx/store';
import { initialMovieItemState } from '../states/movie-item.state';

// tslint:disable-next-line: variable-name
export const _movieItemReducer = createReducer(initialMovieItemState,
  on(actions.createMovieItem),
  on(actions.createMovieItemSuccess, (oldState, action) => {
    const newMovieItemList = oldState.movieItemList.map(item => item);
    const lastItem = newMovieItemList.slice(-1)[0];

    // new MovieItem(); newItem.id = lastItem.id + 1; newItem.name = action.item.name; newItem.groupId = action.item.groupId;
    // newItem.duration = action.item.duration; newItem.source = action.item.source; newItem.detail = action.item.detail;
    const newItem = { id: lastItem.id + 1 , name: action.item.name,
            groupId: action.selectedGroupId , duration: action.item.duration,
            source: action.item.source, detail: action.item.detail } as MovieItem;
    newMovieItemList.push(newItem);

    // const newMovieItemList = oldState.movieItemList.map(item => item);
    // newMovieItemList.push(action.item);

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
    if (oldState.selectedMovieItem.id) {
      const newMovieItemList = temporaryMovieItemList.filter(group => group.id !== oldState.selectedMovieItem.id);

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
  on(actions.enumerateFilterMovieItemList, oldState => {
    return {
        ...oldState,
        filteredMovieItemListNumber: oldState.filteredMovieItemList.length
    };
}),
        /////////////////////////
  on(actions.selectMovieItem, (oldState, action) => {
    return {
      ...oldState,
      selectedMovieItem: action.selectedMovieItem
    };
  }),
  /////////////////////////
  on(actions.editMovieItemSuccess, (oldState, action) => {
    const temporaryItemList = oldState.movieItemList.map(item => item);
    const newMovieItemList = temporaryItemList.filter(item => item.id !== oldState.selectedMovieItem.id);
    const editedMovieItem = {
      id: oldState.selectedMovieItem.id, name: action.item.name,
      groupId: action.item.groupId, duration: action.item.duration,
      source: action.item.source, detail: action.item.detail } as MovieItem;
    newMovieItemList.push(editedMovieItem);
    return {
      ...oldState,
      movieItemList: newMovieItemList
    };
  }),
  on(actions.editMovieItemFailed)

);

export function movieItemReducer(oldState, action) {
  return _movieItemReducer(oldState, action);
}
