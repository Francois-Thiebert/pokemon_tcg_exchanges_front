import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-help-wish',
  templateUrl: './help-wish.component.html',
  styleUrls: ['./help-wish.component.css']
})
export class HelpWishComponent {

  constructor(
          private dialog: MatDialog,
          public MatDialogRef: MatDialogRef<HelpWishComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any
          ) { }


}
