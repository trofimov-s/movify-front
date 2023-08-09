import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApiService } from './base-api.service';
import { MovieResponse, Query } from '../../interface/api';
import { EndpointsConfig } from '@movify/core/env';

@Injectable()
export class MovieApiService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  getMovies(
    endpoint: (c: EndpointsConfig) => string,
    dynamicParam: string,
    query: Query
  ): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.buildUrl(endpoint, dynamicParam, query));
  }
}
