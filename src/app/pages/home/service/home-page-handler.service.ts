import { Injectable } from '@angular/core';
import { MoviesOvwerviewFacadeService } from '@movify/core/service';
import { NowPlayingMovieState } from 'src/app/core/store/now-playing-movie';
import { Observable } from 'rxjs';

@Injectable()
export class HomePageHandlerService {
  private readonly INIT_ACTIONS_MAP: { [key: string]: () => void } = {
    NowPlayingMovie: () => this.movieOverviewFacade.fetchNowMoviePlaying(),
  };
  private wasInitialized = false;

  constructor(private movieOverviewFacade: MoviesOvwerviewFacadeService) {}

  init(): void {
    if (!this.wasInitialized) {
      Object.keys(this.INIT_ACTIONS_MAP).forEach((key) => this.INIT_ACTIONS_MAP[key]());
      this.wasInitialized = true;
    }
  }

  getNowMoviePlayingState(): Observable<NowPlayingMovieState> {
    return this.movieOverviewFacade.getNowMoviePlayingState();
  }
}
