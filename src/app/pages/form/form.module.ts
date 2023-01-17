import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbInputModule,NbPopoverModule,NbProgressBarModule,NbSelectModule, NbStepperModule, NbToastrModule } from '@nebular/theme';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    FormComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbProgressBarModule,
    NbCheckboxModule,
    NbAccordionModule,
    NbStepperModule,
    NbPopoverModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot()
  ]
})
export class FormModule { }
