import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { STRINGS } from '../constants';
import { API_PATH } from '../constants/apiPath';
import { LoginPayload } from '../interface';
import { CookieServices } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient, private cookieService: CookieServices) {}

  login(payload: LoginPayload) {
    return this.httpClient.post(API_PATH.AUTH.LOGIN, payload);
  }

  checkToken() {
    let isAuthenticated: boolean = false;
    const token = this.cookieService.getItem(STRINGS.STORAGE_KEY.TOKEN);
    if (!isEmpty(token)) {
      isAuthenticated = true;
    }
    return isAuthenticated;
  }
}

