import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { APP_CONFIG } from '../../env';
import { UserLocationData } from '../../interface';

@Injectable()
export class UserLocationApiService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  getUserLocationData(): Observable<UserLocationData> {
    return this.http.get(APP_CONFIG.USER_LOCATION_URL).pipe(
      map(
        (resp: any): UserLocationData => ({
          city: resp.location?.city,
          country: resp.location?.country?.name,
          country_iso_code: resp.location?.country?.code,
          flag_emoji: resp.location?.country?.flag?.emoji,
          flag_svg: resp.location?.country?.flag?.twemoji,
        })
      )
    );
  }
}
