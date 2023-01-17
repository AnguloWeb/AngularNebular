import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { NbButtonModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { NbSecurityModule } from '@nebular/security';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomHeaderComponent
  ],
  imports: [
    CommonModule,
    NbUserModule,
    NbButtonModule,
    NbSecurityModule,
    NbSelectModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    CustomHeaderComponent,
  ]
})
export class GeneralModule { }
