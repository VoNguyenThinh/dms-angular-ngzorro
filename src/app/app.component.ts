import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { STRINGS } from './constants';
import { AuthService } from './services/auth.service';
import { CookieServices } from './services/cookie.service';
import { GlobalService } from './services/global.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   appLoading: boolean;
   isAuthenticated: boolean;

   constructor(private globalService: GlobalService, private authService: AuthService, private cookieService: CookieServices) {
      const language = this.cookieService.getItem(STRINGS.STORAGE_KEY.LANGUAGE);
      this.globalService.setLanguage(language ?? 'en');

      this.globalService.appLoading.subscribe(value => {
         this.appLoading = value;
      });
   }

   ngOnInit(): void {
      const token = this.authService.checkToken();
      const email = this.globalService.checkUserInfo();

      if (email) {
         this.globalService.setUserInfo({ email });
      }

      if (token) {
         this.globalService.setIsAuthenticated(true);
         this.isAuthenticated = true;
      }
   }
}
