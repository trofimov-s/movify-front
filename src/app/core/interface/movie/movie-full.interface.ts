import { Genre } from './genre.interface';
import { MovieCollection } from './movie-colection.interface';
import { MovieShort } from './movie-short.interface';
import { ProductionCompany } from './production-company.interface';
import { ProductionCountry } from './production-country.interface';
import { SpokenLanguage } from './spoken-language.interface';

export interface MovieFull extends Omit<MovieShort, 'genre_ids'> {
  belongs_to_collection: MovieCollection;
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  imdb_id: string;
  production_companies: Array<ProductionCompany>;
  production_countries: Array<ProductionCountry>;
  revenue: number;
  runtime: number;
  spoken_languages: Array<SpokenLanguage>;
  status: string;
  tagline: string;
}
