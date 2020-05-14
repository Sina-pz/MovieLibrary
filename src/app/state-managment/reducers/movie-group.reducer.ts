import * as actions from './../actions/movie-group.action';
import { initialMovieGroupState } from './../states/movie-group.state';
import { createReducer, on } from '@ngrx/store';


export const _movieGroupReducer = createReducer(initialMovieGroupState,  // state haro inja vorudi migire
    on(actions.createMovieGroup, oldState => oldState),
    on(actions.createMovieGroupSuccess, (oldState, action) => {      // (a,b) a: state: ImovieGr/ b: ...creatsuccess + prperty:group
        const newGroupList = oldState.groupList.map(group => group); // ?inja faghat newGroupList doros mishe ya group haro ham tush mirize?
        newGroupList.push(action.group);

        return {
            ...oldState,
            groupList: newGroupList  };
        }),
    on(actions.createMovieGroupFailed),
        ///////////////////////////////////////////////////////////////////
        on(actions.loadGroupList),
        on(actions.loadGroupListSuccess, (oldState, action) => {
            return {
                ...oldState,
                groupList: action.groups
            };
        }),
    on(actions.loadGroupListFailed),
    ///////////////////////////////////////////////////////////////////
    on(actions.selectGroupId),
    );

export function movieGroupReducer(oldState, action) {
    return _movieGroupReducer(oldState, action);
}


