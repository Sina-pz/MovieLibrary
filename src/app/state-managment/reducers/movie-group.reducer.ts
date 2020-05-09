import * as actions from './../action';
import { initialMovieGroupState } from './../states/movie-group.state';
import { createReducer, on } from '@ngrx/store';



export const _movieGroupReducer = createReducer(initialMovieGroupState,
    on(actions.createMovieGroup, oldState => oldState),
    on(actions.createMovieGroupSuccess, (oldState, action) => {
        const newGroupList = oldState.groupList.map(group => group);
        newGroupList.push(action.group);

        return {
            ...oldState,
            groupList: newGroupList
        };
        }),
     on(actions.createMovieGroupFailed),
        ///////////////////////////////////////////////////////////////////
        on(actions.getGroupList),
        on(actions.getGroupListSuccess, (oldState, action) => {
            return {
                ...oldState,
                groupList: action.groups
            };
        }),
        on(actions.getGroupListFailed)
    );


export function movieGroupReducer(oldState, action) {
    return _movieGroupReducer(oldState, action);
}


