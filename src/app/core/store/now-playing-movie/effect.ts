import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { NowPlayingMovieAction, NowPlayingMovieActionEnum } from './action';
import { MovieApiService } from '../../service/';
import { MovieResponse } from '../../interface';
import { AppLanguage, TranslateHandlerService } from '@movify/translate';

export const NowPlayingMovies = createEffect(
  (
    actions$ = inject(Actions),
    movieApi = inject(MovieApiService),
    translateHanlder = inject(TranslateHandlerService)
  ) =>
    actions$.pipe(
      ofType(NowPlayingMovieActionEnum.GET_NOW_PLAYING_MOVIE),
      switchMap(() => translateHanlder.currentLang$),
      switchMap((language: AppLanguage) =>
        movieApi.getMovies((c) => c.now_playing, null, { language })
      ),
      map((data: MovieResponse) => NowPlayingMovieAction.getNowPlayingMovieSuccess(data)),
      catchError(() => of(NowPlayingMovieAction.getNowPlayingMocieFailure()))
    ),
  { functional: true }
);
