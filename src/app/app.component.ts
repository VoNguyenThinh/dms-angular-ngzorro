import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';
import { GlobalService } from './services/global.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   appLoading: boolean;
   isAuthenticated: boolean;
   constructor(private globalService: GlobalService, private authService: AuthService, translate: TranslateService) {
      translate.use('en');

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
