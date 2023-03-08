import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main.layout-routing.module';
import { MainLayoutComponent } from './main.layout.component';
import { NGZorroModule } from 'src/app/modules/ng-zorro.module';
import { IconsProviderModule } from 'src/app/modules/icons-provider.module';
import { HomePageComponent } from '../home/home-page.component';
import { UserComponent } from '../user/user.component';
import { LongStringPipe } from 'src/app/pipes/long-string.pipe';
import { ManageDevicesComponent } from '../manage-devices/manage-devices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadTranslateModule } from 'src/app/modules/lazy-load-translate.modules';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
   imports: [CommonModule, MainLayoutRoutingModule, NGZorroModule, IconsProviderModule, FormsModule, ReactiveFormsModule, TranslateModule],
   declarations: [MainLayoutComponent, HomePageComponent, UserComponent, ManageDevicesComponent, LongStringPipe],
   exports: [MainLayoutComponent]
})
export class MainLayoutModule {}
