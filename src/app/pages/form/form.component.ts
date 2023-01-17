import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbDialogService, NbGlobalPhysicalPosition, NbSelectComponent, NbToastrService } from '@nebular/theme';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild('selectNebular', { read: NbSelectComponent, static: true }) selectNebular!: NbSelectComponent;


  public listSelect: string[] = [
    'value 1',
    'value 2',
    'value 3',
    'value 4',
  ]

  constructor(private ds: NbDialogService, private ts: NbToastrService) { }

  ngOnInit(): void {

  }

  open(): void {
    this.ds.open(DialogComponent, {
      context: {
        title: 'Información importante',
        data: 'contenido'
      }
    });

    this.ts.success('Se abrió el dialog', 'Información', { position: NbGlobalPhysicalPosition.BOTTOM_LEFT })
  }

}
