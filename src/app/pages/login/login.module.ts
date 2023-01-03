import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { NGZorroModule } from 'src/app/modules/ng-zorro.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, NGZorroModule, FormsModule, ReactiveFormsModule],
  exports: [LoginComponent]
})
export class LoginModule {}

