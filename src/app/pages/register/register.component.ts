import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { get } from 'lodash';
import { ERROR_CODE } from 'src/app/constants';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validateForm: UntypedFormGroup;
  appLoading!: boolean;
  appData!: any;
  errorMessage: string = '';
  isError!: boolean;
  isSubmitted!: boolean;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private globalService: GlobalService,
    private authService: AuthService,
    public router: Router
  ) {
    this.globalService.appLoading.subscribe(value => {
      this.appLoading = value;
    });
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      email: ['admin01@gmail.com', [Validators.required, Validators.email]],
      password: ['admin01', [Validators.required]],
      confirm_password: ['admin01', [this.confirmValidator]]
    });
  }

  async handleRegister(): Promise<void> {
    if (this.validateForm.invalid) {
      Object.values(this.validateForm.controls).forEach(formItem => {
        formItem.markAsDirty();
        formItem.updateValueAndValidity({ onlySelf: true });
      });
    } else {
      const payload = this.validateForm.value;
      delete payload.confirm_password;

      this.globalService.setAppLoading(true);

      this.authService.createUser(payload, {
        onSuccess: (rs: any) => {
          this.globalService.setAppLoading(false);
          this.isSubmitted = true;
          this.isError = false;
        },
        onError: (error: any) => {
          this.globalService.setAppLoading(false);
          this.isSubmitted = true;
          this.isError = true;
          this.errorMessage = get(ERROR_CODE, error?.code);
        }
      });
    }
  }

  validateConfirmPassword() {
    setTimeout(() => this.validateForm.controls['confirm_password'].updateValueAndValidity());
  }

  confirmValidator(control: UntypedFormControl): { [s: string]: boolean } {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== control.root.get('password')?.value) {
      return { confirm: true, error: true };
    }
    return {};
  }
}

