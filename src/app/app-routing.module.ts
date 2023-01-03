import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LoginAuthGuard } from './guard/login.auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/main.layout/main.layout.module').then(m => m.MainLayoutModule) },
  {
    path: 'auth',
    children: [
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), canActivate:[LoginAuthGuard]},
      { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) }
    ]
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

