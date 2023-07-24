import { HttpClient } from '@angular/common/http';

import { Query } from '../interface/api';
import { EndpointsConfig, endpoints, APP_CONFIG } from '../env';

export abstract class BaseApiService {
  constructor(protected http: HttpClient) {}

  protected buildUrl(
    endpointSelector: (s: EndpointsConfig) => string,
    dynamicData?: string,
    query?: Query
  ): string {
    return this.buildPath(endpointSelector, dynamicData, query);
  }

  private buildQueryParams(query: Query): string {
    return encodeURI(
      Object.entries(query)
        .map((i) => i.join('='))
        .join('&')
    );
  }

  private buildPath(
    endpointSelector: (s: EndpointsConfig) => string,
    dynamicData?: string,
    query?: Query
  ): string {
    const endpoint = endpointSelector(endpoints);
    let path = `${APP_CONFIG.BASE_URL}/${endpoint}`;

    if (dynamicData) {
      path += `/${dynamicData}`;
    }

    if (query) {
      path += `?${this.buildQueryParams(query)}`;
    }

    return path;
  }
}
