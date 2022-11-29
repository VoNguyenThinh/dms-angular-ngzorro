import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private appLoading$ = new BehaviorSubject<boolean>(false);
  public appLoading = this.appLoading$.asObservable();

  private isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticated$.asObservable();

  setAppLoading(value: boolean) {
    this.appLoading$.next(value);
  }

  setIsAuthenticated(value: boolean) {
    this.isAuthenticated$.next(value);
  }

  constructor() {}
}

