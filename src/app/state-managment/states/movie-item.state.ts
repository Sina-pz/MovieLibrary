import { MovieItem } from 'src/app/models/movie-item';
// feature state
export interface IMovieItemState {
movieItemList: MovieItem[];
selectedMovieItemId: number;
}

export const initialMovieItemState: IMovieItemState = {
    movieItemList : undefined,
    selectedMovieItemId : undefined
};

