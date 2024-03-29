import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { STRINGS } from '../constants';
import { CookieServices } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor( private cookieService: CookieServices) {}

  private appLoading$ = new BehaviorSubject<boolean>(false);
  public appLoading = this.appLoading$.asObservable();

  private isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticated$.asObservable();

  private userInfo$ = new BehaviorSubject<any>(null);
  public userInfo = this.userInfo$.asObservable();

  setAppLoading(value: boolean) {
    this.appLoading$.next(value);
  }

  setIsAuthenticated(value: boolean) {
    this.isAuthenticated$.next(value);
  }

  setUserInfo(value: any) {
    this.userInfo$.next(value);
  }
  checkUserInfo(){
    const email = this.cookieService.getItem(STRINGS.USER.EMAIL) || null;
    return email
  }
}

