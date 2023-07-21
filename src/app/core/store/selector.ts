import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './reducer';
import { StateKey } from './reducers';

const selectFeature = createFeatureSelector<HomeState>(StateKey.HOME);

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: HomeState) => state.counter
);
