import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieServices {
  constructor(private cookieService: CookieService) {}

  getItem(key: string) {
    const result = this.cookieService.get(key || '');
    JSON.parse(result);
    return result;
  }

  setItem(key: string, value: any) {
    this.cookieService.set(key, JSON.stringify(value), { expires: 60, path: '/' });
  }

  removeItem(key: string) {
    this.cookieService.delete(key);
  }

  clearCookie() {
    this.cookieService.deleteAll();
  }
}

