import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STRINGS } from 'src/app/constants';
import { AuthService } from 'src/app/services/auth.service';
import { CookieServices } from 'src/app/services/cookie.service';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-main.layout',
  templateUrl: './main.layout.component.html',
  styleUrls: ['./main.layout.component.scss'],
  providers: []
})
export class MainLayoutComponent implements OnInit {
  isCollapsed: boolean = false;
  userInfo: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private globalService: GlobalService,
    private cookieService: CookieServices
  ) {}

  onLogout() {
    this.authService.logout({
      onSuccess: res => {
        if (res) {
          this.cookieService.removeItem(STRINGS.STORAGE_KEY.TOKEN);
          this.cookieService.removeItem(STRINGS.USER.EMAIL);
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
  }
}

