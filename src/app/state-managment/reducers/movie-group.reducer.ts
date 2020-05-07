import { IMovieGroupState, initialMovieGroupState } from '../states/movie-group.state';
import { MovieGroupAction, MovieGroupActionName } from '../action';


export const movieGroupReducer = (
    oldState = initialMovieGroupState,  // injuri faghat 2 ta state akhar savemishe!?
    action: MovieGroupAction): IMovieGroupState => {
    switch (action.type) {
        case MovieGroupActionName.Create:
            return {...oldState};   // maziatesh chie?
        case MovieGroupActionName.CreateSuccess:
            const newGroupList = oldState.groupList.map(group => group); // immutable! tak take group ha ye list copy-ghabli ham sare jash
            newGroupList.push(action.group);  // uni ke az backend umade tu action ast

            return {...oldState,  // az in comma be bad property ha dar ekhtiaran
            groupList: newGroupList
            };

        case MovieGroupActionName.CreateFailed:
            return {...oldState};
    }

    };

