import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { STRINGS } from './constants';
import { AuthService } from './services/auth.service';
import { CookieServices } from './services/cookie.service';
import { FirebaseService } from './services/firebase.service';
import { GlobalService } from './services/global.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   appLoading: boolean;
   constructor(
      private globalService: GlobalService,
      private authService: AuthService,
      private cookieService: CookieServices,
      private firebaseService: FirebaseService
   ) {}

   ngOnInit() {
      this.globalService.setAppLoading(true);
      this.globalService.appLoading.subscribe(value => {
         this.appLoading = value;
      });

      const token = this.authService.checkToken();

      if (token) {
         this.globalService.setIsAuthenticated(true);

         this.authService.getUserInfo(() => {
            this.globalService.setAppLoading(false);
         });
      } else {
         this.globalService.setAppLoading(false);
      }

      const language = this.cookieService.getItem(STRINGS.STORAGE_KEY.LANGUAGE);
      this.globalService.setLanguage(language);

      this.firebaseService.getFirebaseLanguage((snapshot: any) => {
         this.globalService.setLanguage(snapshot.val());
      });
   }
}
