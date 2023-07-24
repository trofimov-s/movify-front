import { createAction, props } from '@ngrx/store';

import { UserLocationData } from '../../interface';

export const enum UserActionEnum {
  GET_USER_LOCATION_DATA = '[User] Get user location data',
  GET_USER_LOCATION_DATA_SUCCESS = '[User] Get user location data success',
  GET_USER_LOCATION_DATA_FAILURE = '[User] Get user location data failure',
}

export const UserDataActions = {
  getUserLocationData: createAction(UserActionEnum.GET_USER_LOCATION_DATA),
  getUserLocationDataSuccess: createAction(
    UserActionEnum.GET_USER_LOCATION_DATA_SUCCESS,
    props<UserLocationData>()
  ),
  getUserLocationDataFailure: createAction(UserActionEnum.GET_USER_LOCATION_DATA_FAILURE),
};
