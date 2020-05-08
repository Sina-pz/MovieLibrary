import { initialMovieGroupState } from './states/movie-group.state';
import { createReducer, on } from '@ngrx/store';
import { createMovieGroup, createMovieGroupSuccess, createMovieGroupFailed } from './action';

const _movieGroupReducer = createReducer(initialMovieGroupState,
    on(createMovieGroup, oldState => oldState ),

    on(createMovieGroupSuccess, (oldState, action)  => {
        const newGroupList = oldState.groupList.map(group => group);
        newGroupList.push(action.group);

        return {...oldState,
            groupList: newGroupList
            };
    }),
    on(createMovieGroupFailed)
    );

export function movieGroupReducer(oldState, action) {
    return _movieGroupReducer(oldState, action);
}


// (
//     oldState = initialMovieGroupState,
//     action: MovieGroupAction): IMovieGroupState => {
//     switch (action.type) {
//         case MovieGroupActionName.Create:
//             return {...oldState};
//         case MovieGroupActionName.CreateSuccess:
//             const newGroupList = oldState.groupList.map(group => group);
//             newGroupList.push(action.group);

//             return {...oldState,
//             groupList: newGroupList
//             };

//         case MovieGroupActionName.CreateFailed:
//             return {...oldState};
//     }      

//     };