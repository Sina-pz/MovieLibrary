import { MovieItem } from 'src/app/models/movie-item';
// feature state
export interface IMovieItemState {
movieItemList: MovieItem[];
filteredMovieItemList: MovieItem[];    // from groupList
filteredMovieItemListNumber: number;
selectedMovieItem: MovieItem;           // for remove
searchedMovieItem: MovieItem;
}

export const initialMovieItemState: IMovieItemState = {
    movieItemList : undefined,
    filteredMovieItemList: undefined,
    filteredMovieItemListNumber: undefined,
    selectedMovieItem : undefined,
    searchedMovieItem: undefined
};

export const getMovieItemList = (state: IMovieItemState) => state.movieItemList; // page is loading //\\//
export const getFilteredMovieItemList = (state: IMovieItemState) => state.filteredMovieItemList;
export const getFilteredMovieItemListNumber = (state: IMovieItemState) => state.filteredMovieItemListNumber;
export const getSelectedMovieItem = (state: IMovieItemState) => state.selectedMovieItem;
export const getSearchedMovieItem = (state: IMovieItemState) => state.searchedMovieItem;
