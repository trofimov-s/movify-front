import { createFeatureSelector, createSelector } from '@ngrx/store';

import { NowPlayingMovieState } from './reducer';
import { StateKey } from '../reducers';

const selectFeature = createFeatureSelector<NowPlayingMovieState>(StateKey.NOW_PLAYING_MOVIE);

export const SelectNowPlayingMovie = createSelector(
  selectFeature,
  (state: NowPlayingMovieState): NowPlayingMovieState => state
);
