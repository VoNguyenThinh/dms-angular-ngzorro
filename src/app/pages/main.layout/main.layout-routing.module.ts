import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/authen.guard';
import { HomePageComponent } from '../home/home-page.component';
import { ManageDevicesComponent } from '../manage-devices/manage-devices.component';
import { UserComponent } from '../user/user.component';
import { MainLayoutComponent } from './main.layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'members',
        component: UserComponent
      },
      {
        path: 'devices',
        component: ManageDevicesComponent
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule {}

