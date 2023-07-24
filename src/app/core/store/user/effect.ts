import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { UserActionEnum, UserDataActions } from './action';
import { UserLocationApiService } from '../../service/';
import { UserLocationData } from '../../interface';

export const TestEffect = createEffect(
  (actions$ = inject(Actions), userLocationApi = inject(UserLocationApiService)) =>
    actions$.pipe(
      ofType(UserActionEnum.GET_USER_LOCATION_DATA),
      switchMap(() => userLocationApi.getUserLocationData()),
      map((data: UserLocationData) => UserDataActions.getUserLocationDataSuccess(data)),
      catchError(() => of(UserDataActions.getUserLocationDataFailure()))
    ),
  { functional: true }
);
