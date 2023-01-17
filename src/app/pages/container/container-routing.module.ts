import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from 'src/app/guards/roles.guard';
import { ContainerComponent } from './container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../main/main.module').then(m => m.MainModule),
        canActivate: [RolesGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(p => p.ProfileModule),
        canActivate: [RolesGuard]
      },
      {
        path: 'form',
        loadChildren: () => import('../form/form.module').then(f => f.FormModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
