import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../env';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: HttpHeaders = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${APP_CONFIG.BEARER_TOKEN}`,
    });
    const httpsReq: HttpRequest<any> = req.clone({ headers });

    return next.handle(httpsReq);
  }
}
