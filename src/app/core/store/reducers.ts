import { ActionReducerMap } from '@ngrx/store';

import { UserState, userReducer } from './user';

export enum StateKey {
  USER = 'user',
}

export interface AppState {
  [StateKey.USER]: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
};
