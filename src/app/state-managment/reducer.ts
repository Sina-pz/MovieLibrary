import { IMovieGroupState, initialMovieGroupState } from './states/movie-group.state';
import { MovieGroupAction, MovieGroupActionName } from './action';

export const movieGroupReducer = (
    oldState = initialMovieGroupState,
    action: MovieGroupAction): IMovieGroupState => {
    switch (action.type) {
        case MovieGroupActionName.Create:
            return {...oldState};
        case MovieGroupActionName.CreateSuccess:
            const newGroupList = oldState.groupList.map(group => group);
            newGroupList.push(action.group);

            return {...oldState,
            groupList: newGroupList
            };

        case MovieGroupActionName.CreateFailed:
            return {...oldState};
    }      

    };