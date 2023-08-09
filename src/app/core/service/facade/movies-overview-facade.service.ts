import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import {
  NowPlayingMovieAction,
  NowPlayingMovieState,
  SelectNowPlayingMovie,
} from '../../store/now-playing-movie';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesOvwerviewFacadeService {
  constructor(private store: Store<AppState>) {}

  fetchNowMoviePlaying(): void {
    this.store.dispatch(NowPlayingMovieAction.getNowPlayingMovie());
  }

  getNowMoviePlayingState(): Observable<NowPlayingMovieState> {
    return this.store.select(SelectNowPlayingMovie);
  }
}
