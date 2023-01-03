import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { STRINGS } from '../constants';
import { AuthService } from '../services/auth.service';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private globalService: GlobalService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthenticated = false;
    this.globalService.isAuthenticated.subscribe(data => {
      isAuthenticated = data;
    });

    if (!isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}

