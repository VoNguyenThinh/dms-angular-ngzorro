import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  exports: [
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    NzAlertModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzAvatarModule,
    NzCardModule,
    NzBadgeModule,
    NzTagModule,
    NzTableModule
  ]
})
export class NGZorroModule {}
