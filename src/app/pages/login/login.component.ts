import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { get } from 'lodash';
import { API_PATH, ERROR_CODE, STRINGS } from 'src/app/constants';
import { AuthService } from 'src/app/services/auth.service';
import { CookieServices } from 'src/app/services/cookie.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData!: UntypedFormGroup;
  appLoading!: boolean;
  appData!: any;
  isError!: boolean;
  errorMessage: string = '';
  passwordVisible = false;
  password?: string;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private globalService: GlobalService,
    private cookieService: CookieServices,
    public router: Router
  ) {
    this.globalService.appLoading.subscribe(value => {
      this.appLoading = value;
    });

    this.formData = this.formBuilder.group({
      email: ['admin01@gmail.com', [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  handleLogin() {
    if (this.formData.invalid) {
      Object.values(this.formData.controls).forEach(formItem => {
        formItem.markAsDirty();
        formItem.updateValueAndValidity({ onlySelf: true });
      });
    } else {
      this.globalService.setAppLoading(true);
      const payload = this.formData.value;
      this.authService.login(payload, {
        onSuccess: result => {
          console.log(result);
          this.globalService.setAppLoading(false);
          this.globalService.setUserInfo({ email: result.user.email });
          this.globalService.setIsAuthenticated(true);
          this.cookieService.setItem(STRINGS.STORAGE_KEY.TOKEN, result.user.accessToken);
          this.cookieService.setItem(STRINGS.USER.EMAIL, result.user.email);
          this.router.navigate(['home']);
        },
        onError: error => {
          console.log(error.code);
          this.globalService.setAppLoading(false);
          this.isError = true;
          this.errorMessage = get(ERROR_CODE, error.code);
        }
      });
    }
  }

  ngOnInit(): void {
    // this.globalService.setAppLoading(true);
  }

  ngAfterViewInit() {}
}

