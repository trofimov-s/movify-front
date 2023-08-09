import { ActionReducerMap } from '@ngrx/store';

import { UserState, userReducer } from './user';
import { NowPlayingMovieState, nowPlayingMovieReducer } from './now-playing-movie';

export const enum StateKey {
  USER = 'user',
  NOW_PLAYING_MOVIE = 'now_playing_movie',
}

export interface AppState {
  [StateKey.USER]: UserState;
  [StateKey.NOW_PLAYING_MOVIE]: NowPlayingMovieState;
}

export const reducers: ActionReducerMap<AppState> = {
  [StateKey.USER]: userReducer,
  [StateKey.NOW_PLAYING_MOVIE]: nowPlayingMovieReducer,
};
