import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main.layout-routing.module';
import { MainLayoutComponent } from './main.layout.component';
import { NGZorroModule } from 'src/app/modules/ng-zorro.module';
import { IconsProviderModule } from 'src/app/modules/icons-provider.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, MainLayoutRoutingModule, NGZorroModule, IconsProviderModule],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule {}

