import { Component, OnInit } from '@angular/core';
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
  appLoading!: boolean;

  constructor(private globalService: GlobalService, private cookieService: CookieServices, private auth: AuthService) {
    this.globalService.appLoading.subscribe(value => {
      this.appLoading = value;
    });
  }

  ngOnInit(): void {

  }
}

