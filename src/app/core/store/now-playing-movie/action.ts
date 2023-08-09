import { createAction, props } from '@ngrx/store';
import { MovieResponse } from '../../interface/api';

export const enum NowPlayingMovieActionEnum {
  GET_NOW_PLAYING_MOVIE = '[Now playing movie] Get now playing movie',
  GET_NOW_PLAYING_MOVIE_SUCCESS = '[Now playing movie] Get now playing movie success',
  GET_NOW_PLAYING_MOVIE_FAILURE = '[Now playing movie] Get now playing movie failure',
}

export const NowPlayingMovieAction = {
  getNowPlayingMovie: createAction(NowPlayingMovieActionEnum.GET_NOW_PLAYING_MOVIE),
  getNowPlayingMovieSuccess: createAction(
    NowPlayingMovieActionEnum.GET_NOW_PLAYING_MOVIE_SUCCESS,
    props<MovieResponse>()
  ),
  getNowPlayingMocieFailure: createAction(NowPlayingMovieActionEnum.GET_NOW_PLAYING_MOVIE_FAILURE),
};
