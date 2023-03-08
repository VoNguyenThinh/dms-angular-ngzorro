import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageDevicesRoutingModule } from './manage-devices-routing.module';
import { ManageDevicesComponent } from './manage-devices.component';
import { NGZorroModule } from 'src/app/modules/ng-zorro.module';

@NgModule({
  imports: [CommonModule, ManageDevicesRoutingModule, NGZorroModule],
})
export class ManageDevicesModule {}
