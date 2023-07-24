import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './reducer';
import { StateKey } from '../reducers';
import { UserLocationData } from '../../interface';

const selectFeature = createFeatureSelector<UserState>(StateKey.USER);

export const SelectUserLocation = createSelector(
  selectFeature,
  (state: UserState): UserLocationData => state.location
);
