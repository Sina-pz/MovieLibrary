import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { movieGroupReducer } from './movie-group.reducer';
import { IAppState } from './../states/app.state';
import { movieItemReducer} from './movie-item.reducer';



export const appReducers: ActionReducerMap<IAppState, any> = {
router: routerReducer,
movieItem: movieItemReducer,
movieGroup: movieGroupReducer
};
