import { MovieItemAction, MovieItemActionName } from '../action';
import { IMovieItemState, initialMovieItemState } from '../states/movie-item.state';


export const movieItemReducer = (
    oldState = initialMovieItemState,
    action: MovieItemAction): IMovieItemState => {
    switch (action.type) {
        case MovieItemActionName.Create:
            return { ...oldState };
        case MovieItemActionName.CreateSuccess:
            const newGroupList = oldState.movieItemList.map(item => item);
            newGroupList.push(action.item);

            return {
                ...oldState,
                movieItemList: newGroupList
            };

        case MovieItemActionName.CreateFailed:
            return { ...oldState };
    }

};
