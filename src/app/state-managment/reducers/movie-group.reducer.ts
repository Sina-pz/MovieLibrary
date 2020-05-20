import { removeItemSuccess } from './../actions/movie-item.action';
import { selectSelectedGroupId } from './../states/index';
import * as actions from './../actions/movie-group.action';
import { initialMovieGroupState } from './../states/movie-group.state';
import { createReducer, on } from '@ngrx/store';


// tslint:disable-next-line: variable-name
export const _movieGroupReducer = createReducer(initialMovieGroupState,
    on(actions.createMovieGroup, oldState => oldState),
    on(actions.createMovieGroupSuccess, (oldState, action) => {
        const newGroupList = oldState.groupList.map(group => group);
        newGroupList.push(action.group);
        return {
            ...oldState,
            groupList: newGroupList  };
        }),
    on(actions.createMovieGroupFailed),
      ///////////////////////////////////
    on(actions.removeGroup),
    on(actions.removeGroupSuccess, (oldState, action) => {
        return {
            ...oldState,
            groupList: action.groups
        };
    }),
    on(actions.removeGroupFailed),
        ///////////////////////////////////////////////////////////////////
        on(actions.loadGroupList),  // in karb? unin ke mire effect //
        on(actions.loadGroupListSuccess, (oldState, action) => {
            return {
                ...oldState,
                groupList: action.groups
            };
        }),
    on(actions.loadGroupListFailed),
    ///////////////////////////////////////////////////////////////////
    on(actions.selectGroupId, (oldState, action) => {
        return {
            ...oldState,
            selectedGroupId: action.selectedGroupId
        };
    }),
    );
    //////////////////

export function movieGroupReducer(oldState, action) {
    return _movieGroupReducer(oldState, action);
}


