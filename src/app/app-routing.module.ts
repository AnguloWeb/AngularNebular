import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { ValidationAuthGuard } from './guards/validation-auth.guard';
import { ValidationLoginGuard } from './guards/validation-login.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/container/container.module').then(m => m.ContainerModule),
    canActivate: [ValidationLoginGuard]
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    canActivate: [ValidationAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix'
      },
      {
        path: 'login', 
        component: NbLoginComponent,
       
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
      {
        path: 'main',
        redirectTo: '/main',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
