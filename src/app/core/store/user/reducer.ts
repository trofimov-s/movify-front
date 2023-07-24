import { createReducer, on } from '@ngrx/store';

import { UserLocationData } from '../../interface';
import { UserDataActions } from './action';

export interface UserState {
  location: UserLocationData;
}

const userState: UserState = {
  location: null,
};

export const userReducer = createReducer(
  userState,
  on(UserDataActions.getUserLocationDataSuccess, (state: UserState, data: UserLocationData) => ({
    ...state,
    location: data,
  }))
);
