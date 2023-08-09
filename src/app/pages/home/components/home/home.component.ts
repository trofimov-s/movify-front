import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomePageHandlerService } from '../../service';
import { Observable } from 'rxjs';
import { NowPlayingMovieState } from 'src/app/core/store/now-playing-movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  nowPlayingOverviewMoviesState$: Observable<NowPlayingMovieState>;

  constructor(private homePageHandler: HomePageHandlerService) {}

  ngOnInit(): void {
    this.homePageHandler.init();
    this.nowPlayingOverviewMoviesState$ = this.homePageHandler.getNowMoviePlayingState();
  }
}
