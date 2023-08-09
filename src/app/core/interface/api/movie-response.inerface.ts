import { MovieShort } from '../movie';

export interface MovieResponse {
  page: number;
  results: Array<MovieShort>;
  total_pages: number;
  total_results: number;
}
