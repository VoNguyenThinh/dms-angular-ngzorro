import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  exports:[
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzGridModule
  ]
})

export class NGZorroModule{}
