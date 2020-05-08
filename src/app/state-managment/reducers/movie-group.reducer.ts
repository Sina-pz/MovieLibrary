import { createMovieGroup, createMovieGroupSuccess, createMovieGroupFailed } from './../action';
import { initialMovieGroupState } from './../states/movie-group.state';
import { createReducer, on } from '@ngrx/store';



export const _movieGroupReducer = createReducer(initialMovieGroupState,
    on(createMovieGroup, oldState => oldState),
    on(createMovieGroupSuccess, (oldState, action) => {
        const newGroupList = oldState.groupList.map(group => group);
        newGroupList.push(action.group);

        return {
            ...oldState,
            groupList: newGroupList
        };
        }),
     on(createMovieGroupFailed)
    );


