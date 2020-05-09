import { MovieItem } from 'src/app/models/movie-item';
// feature state
export interface IMovieItemState {
movieItemList: MovieItem[];
FilteredMovieItemList: MovieItem[];
selectedMovieItemId: number;
}

export const initialMovieItemState: IMovieItemState = {
    movieItemList : undefined,
    FilteredMovieItemList: undefined,
    selectedMovieItemId : undefined
};


export const getFilteredMovieItemList = (state: IMovieItemState) => state.FilteredMovieItemList;
export const getSelectedMovieItemId = (state: IMovieItemState) => state.selectedMovieItemId;
