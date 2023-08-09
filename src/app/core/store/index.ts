import { NowPlayingMoviesEffects } from './now-playing-movie';
import { UserEffects } from './user';

export { reducers, AppState } from './reducers';

export const Effects = [UserEffects, NowPlayingMoviesEffects];
