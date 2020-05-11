import { MovieItem } from 'src/app/models/movie-item';
// feature state
export interface IMovieItemState {
movieItemList: MovieItem[];
FilteredMovieItemList: MovieItem[];    // from groupList
selectedMovieItemId: number;           // for remove
}

export const initialMovieItemState: IMovieItemState = {
    movieItemList : undefined,
    FilteredMovieItemList: undefined,
    selectedMovieItemId : undefined
};

export const getMovieItemList = (state: IMovieItemState) => state.movieItemList; // page is loading //\\//
export const getFilteredMovieItemList = (state: IMovieItemState) => state.FilteredMovieItemList;
export const getSelectedMovieItemId = (state: IMovieItemState) => state.selectedMovieItemId;
