import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const routes: Routes = [
  { path: '', component: MainComponent }
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbEvaIconsModule,
    NbIconModule,
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class MainModule { }
