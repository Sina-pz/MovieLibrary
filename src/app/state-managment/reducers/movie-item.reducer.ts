import { createMovieItemSuccess, createMovieItemFailed } from './../action';
import { createReducer, on } from '@ngrx/store';
import { initialMovieItemState } from '../states/movie-item.state';
import { createMovieItem, createMovieGroupSuccess } from '../action';


export const _movieItemReducer = createReducer(initialMovieItemState,
    on(createMovieItem, oldState => oldState),
    on(createMovieItemSuccess, (oldState, action) => {
        const newGroupList = oldState.movieItemList.map(item => item);
        newGroupList.push(action.Item);

        return {
            ...oldState,
            groupList: newGroupList
        };
        }),
     on(createMovieItemFailed)
    );
