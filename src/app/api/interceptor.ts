import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STRINGS } from '../constants';
import { CookieServices } from '../services/cookie.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private cookieService: CookieServices) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const base_api_url: string = 'https://dmsweb-server.herokuapp.com';
    const base_api_url: string = 'http://localhost:3000';
    const token: string = this.cookieService.getItem(STRINGS.STORAGE_KEY.TOKEN);
    const apiReq = request.clone({
      url: `${base_api_url}/${request.url}`,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token ?? ''
      })
    });
    return next.handle(apiReq);
  }
}

