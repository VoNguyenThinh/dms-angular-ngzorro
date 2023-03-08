import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { CookieService } from 'ngx-cookie-service';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieServices {
  constructor(private cookieService: CookieService) {}

  getItem(key: string) {
    let result: any;
    const item = this.cookieService.get(key || '');
    isEmpty(item) ? (result = null) : (result = JSON.parse(item));
    return result;
  }

  setItem(key: string, value: any) {
    const date = new Date();
    date.setTime(date.getTime() + 60 * 60 * 1000); // 30 minutes
    this.cookieService.set(key, JSON.stringify(value), { expires: date, path: '/' });
  }

  removeItem(key: string) {
    this.cookieService.delete(key);
  }

  clearCookie() {
    this.cookieService.deleteAll();
  }
}
