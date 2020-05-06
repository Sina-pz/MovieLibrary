import { MovieGroup } from 'src/app/models/movie-group';


export interface IMovieGroupState {
    groupList: MovieGroup[];
    selectedGroupId: number;
}

export const initialMovieGroupState: IMovieGroupState = {
    groupList: undefined,
    selectedGroupId: undefined
};

