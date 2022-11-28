import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { API_PATH, STRINGS } from 'src/app/constants';
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

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private globalService: GlobalService,
    private cookieService: CookieServices,
    private router: Router
  ) {
    this.globalService.appLoading.subscribe(value => {
      this.appLoading = value;
    });
  }

  async handleLogin(): Promise<void> {
    if (this.formData.invalid) {
      Object.values(this.formData.controls).forEach(formItem => {
        formItem.markAsDirty();
        formItem.updateValueAndValidity({ onlySelf: true });
      });
    } else {
      const payload = this.formData.value;
      this.globalService.setAppLoading(true);

      await this.authService.login(payload).subscribe(
        (data: any) => {
          this.globalService.setAppLoading(false);
          this.cookieService.setItem(STRINGS.STORAGE_KEY.TOKEN, data.jwt);
          this.router.navigate(['home']);
        },
        (error: any) => {
          this.globalService.setAppLoading(false);
          this.isError = true;
          console.log(error);
        }
      );
    }
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      username: ['admin2@gmail.com', [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  ngAfterViewInit() {}
}

