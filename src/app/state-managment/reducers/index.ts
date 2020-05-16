import { IAppState } from './../states/index';
import {  ActionReducerMap, MetaReducer} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { movieGroupReducer } from './movie-group.reducer';
import { movieItemReducer } from './movie-item.reducer';

export const reducers: ActionReducerMap<IAppState> = {
    movieGroupState: movieGroupReducer,
    movieItemState: movieItemReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
