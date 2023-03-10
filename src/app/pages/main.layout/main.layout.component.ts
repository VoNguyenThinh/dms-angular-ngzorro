import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CookieServices } from 'src/app/services/cookie.service';
import { GlobalService } from 'src/app/services/global.service';
@Component({
   selector: 'app-main.layout',
   templateUrl: './main.layout.component.html',
   styleUrls: ['./main.layout.component.scss'],
   providers: []
})
export class MainLayoutComponent implements OnInit, OnDestroy {
   isCollapsed: boolean = false;
   userInfo: any;
   language: string;

   constructor(
      private router: Router,
      private authService: AuthService,
      private globalService: GlobalService,
      private cookieService: CookieServices,
   ) {}

   onChangeLanguage($event: string) {
      this.globalService.setLanguage($event);
   }

   onLogout() {
      this.authService.logout({
         onSuccess: res => {
            if (res) {
               this.cookieService.clearCookie();
               this.globalService.setIsAuthenticated(false);
               this.globalService.setAppLoading(true);

               setTimeout(() => {
                  this.globalService.setAppLoading(false);
                  this.router.navigate(['auth/login']);
               }, 500);
            }
         }
      });
   }

   ngOnInit(): void {
      this.globalService.userInfo.subscribe(data => {
         this.userInfo = data;
      });

      this.globalService.language.subscribe(lang => {
         this.language = lang;
      });
   }

   ngOnDestroy() {
      // this.subscription.unsubscribe();
   }
}
