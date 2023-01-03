import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NGZorroModule } from 'src/app/modules/ng-zorro.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NGZorroModule]
})
export class HomeModule {}

