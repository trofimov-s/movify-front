import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomePageActionEnum } from './action';
import { tap } from 'rxjs';

export const TestEffect = createEffect(
  () =>
    inject(Actions).pipe(
      ofType(HomePageActionEnum.INCREASE),
      tap(() => alert('effect'))
    ),
  { dispatch: false, functional: true }
);
