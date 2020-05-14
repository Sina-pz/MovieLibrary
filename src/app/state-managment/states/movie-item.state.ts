import { MovieItem } from 'src/app/models/movie-item';
// feature state
export interface IMovieItemState {
movieItemList: MovieItem[];
filteredMovieItemList: MovieItem[];    // from groupList
selectedMovieItemId: number;           // for remove
}

export const initialMovieItemState: IMovieItemState = {
    movieItemList : undefined,
    filteredMovieItemList: undefined,
    selectedMovieItemId : undefined
};

export const getFilteredMovieItemList = (state: IMovieItemState) => state.filteredMovieItemList;
export const getSelectedMovieItemId = (state: IMovieItemState) => state.selectedMovieItemId;
