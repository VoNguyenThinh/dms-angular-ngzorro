import { Component, OnInit } from '@angular/core';
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

  constructor(private globalService: GlobalService, private authService: AuthService) {
    this.globalService.appLoading.subscribe(value => {
      this.appLoading = value;
    });
  }

  ngOnInit(): void {
    const token = this.authService.checkToken();
    if (token) {
      this.globalService.setIsAuthenticated(true);
      this.isAuthenticated = true;
    }
  }
}

