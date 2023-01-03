import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { STRINGS } from '../constants';
import { API_PATH } from '../constants/apiPath';
import { LoginPayload } from '../interface';
import { ResponseMethod } from '../interface/login.interface';
import { CookieServices } from './cookie.service';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '../config/firebase.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient, private cookieService: CookieServices) {}

  createUser(payload: { email: string; password: string }, { onSuccess, onError }: ResponseMethod) {
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((result: any) => {
        onSuccess && onSuccess(result);
      })
      .catch((error: any) => {
        onError && onError(error);
      });
  }

  login(payload: LoginPayload, { onSuccess, onError }: ResponseMethod) {
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((result: any) => {
        onSuccess && onSuccess(result);
      })
      .catch((error: any) => {
        onError && onError(error);
      });
  }

  logout({ onSuccess, onError }: ResponseMethod) {
    signOut(auth)
      .then(() => {
        onSuccess && onSuccess(true);
      })
      .catch(error => {
        onError && onError(error);
      });
  }

  getUserInfo() {
    // return this.httpClient.get(API_PATH.USER.USER_INFO);
  }

  checkToken() {
    let isAuthenticated: boolean = false;
    const token = this.cookieService.getItem(STRINGS.STORAGE_KEY.TOKEN) || null;
    if (!isEmpty(token)) {
      isAuthenticated = true;
    }
    return isAuthenticated;
  }
}

