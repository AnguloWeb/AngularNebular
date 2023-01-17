import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() title!: string;
  @Input() data!: string;
  constructor(protected ref: NbDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }
}
