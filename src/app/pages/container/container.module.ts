import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { NbLayoutModule } from '@nebular/theme';
import { GeneralModule } from 'src/app/components/general/general.module';


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    NbLayoutModule,
    GeneralModule
  ]
})
export class ContainerModule { }
