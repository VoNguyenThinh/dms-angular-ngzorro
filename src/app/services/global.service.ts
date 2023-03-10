import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isEmpty } from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { STRINGS } from '../constants';
import { CookieServices } from './cookie.service';
import { FirebaseService } from './firebase.service';

@Injectable({
   providedIn: 'root'
})
export class GlobalService {
   constructor(private cookieService: CookieServices, private translate: TranslateService, private firebaseService: FirebaseService) {}

   private appLoading$ = new BehaviorSubject<boolean>(false);
   public appLoading = this.appLoading$.asObservable();

   private isAuthenticated$ = new BehaviorSubject<boolean>(false);
   public isAuthenticated = this.isAuthenticated$.asObservable();

   private userInfo$ = new BehaviorSubject<any>(null);
   public userInfo = this.userInfo$.asObservable();

   private language$ = new BehaviorSubject<any>(null);
   public language = this.language$.asObservable();

   setAppLoading(value: boolean) {
      this.appLoading$.next(value);
   }

   setIsAuthenticated(value: boolean) {
      this.isAuthenticated$.next(value);
   }

   setUserInfo(value: any) {
      this.userInfo$.next(value);
   }

   setLanguage(lang: string) {
      this.translate.use(lang);
      this.language$.next(lang);
      this.firebaseService.setFirebaseLanguage(lang);
      this.cookieService.setItem(STRINGS.STORAGE_KEY.LANGUAGE, lang);
   }

   checkUserInfo() {
      const email = this.cookieService.getItem(STRINGS.USER.EMAIL) || null;
      return email;
   }
}
