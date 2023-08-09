import { createReducer, on } from '@ngrx/store';
import { BaseMovieState } from '../../interface/store';
import { NowPlayingMovieAction } from './action';
import { MovieResponse } from '../../interface/api';

export type NowPlayingMovieState = BaseMovieState;

const state: NowPlayingMovieState = {
  isLoading: false,
  page: 0,
  results: null,
  total_pages: null,
  total_results: null,
};

export const nowPlayingMovieReducer = createReducer(
  state,
  on(NowPlayingMovieAction.getNowPlayingMovie, (state) => ({ ...state, isLoading: true })),
  on(NowPlayingMovieAction.getNowPlayingMovieSuccess, (state, resp: MovieResponse) => ({
    ...state,
    ...resp,
    isLoading: false,
  }))
);
