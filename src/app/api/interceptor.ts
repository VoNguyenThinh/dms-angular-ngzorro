import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const base_api_url: string = 'https://dmsweb-server.herokuapp.com';
    const apiReq = request.clone({ url: `${base_api_url}/${request.url}`});
    return next.handle(apiReq);
  }
}

