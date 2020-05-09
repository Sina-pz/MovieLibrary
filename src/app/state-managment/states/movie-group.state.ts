import { MovieGroup } from 'src/app/models/movie-group';

// feature state
export interface IMovieGroupState {
    groupList: MovieGroup[];
    selectedGroupId: number;
}

export const initialMovieGroupState: IMovieGroupState = {
    groupList: undefined,
    selectedGroupId: undefined
};



export const getGroupList = (state: IMovieGroupState) => state.groupList;
export const getSelectedGroupId = (state: IMovieGroupState) => state.selectedGroupId;
