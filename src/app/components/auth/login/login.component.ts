import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   validateForm!: UntypedFormGroup;

   submitForm(): void {
      if (this.validateForm.invalid) {
         Object.values(this.validateForm.controls).forEach(formItem => {
            formItem.markAsDirty();
            formItem.updateValueAndValidity({ onlySelf: true });
         });
      } else {
         console.log(this.validateForm.value);
      }
   }

   constructor(private formBuilder: UntypedFormBuilder) {}

   ngOnInit(): void {
      this.validateForm = this.formBuilder.group({
         userName: [null, [Validators.required, Validators.email]],
         password: [null, [Validators.required]]
      });
   }

   ngAfterViewInit() {
   }
}
