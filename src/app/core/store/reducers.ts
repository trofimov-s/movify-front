import { ActionReducerMap } from '@ngrx/store';
import { HomeState } from './reducer';
import { homeReducer } from './reducer';

export enum StateKey {
  HOME = 'home',
}

export interface AppState {
  [StateKey.HOME]: HomeState;
}

export const reducers: ActionReducerMap<AppState> = {
  home: homeReducer,
};
