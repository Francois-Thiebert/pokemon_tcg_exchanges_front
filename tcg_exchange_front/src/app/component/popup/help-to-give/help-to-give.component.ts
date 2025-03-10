import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-help-to-give',
  templateUrl: './help-to-give.component.html',
  styleUrls: ['./help-to-give.component.css']
})
export class HelpToGiveComponent {

  constructor(
        private dialog: MatDialog,
        public MatDialogRef: MatDialogRef<HelpToGiveComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
        ) { }

}
