import { MovieShort } from '../movie';

export interface BaseMovieState {
  page: number;
  isLoading: boolean;
  results: Array<MovieShort>;
  total_pages: number;
  total_results: number;
}
