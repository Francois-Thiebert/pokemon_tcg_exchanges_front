import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-exchange-confirm',
  templateUrl: './new-exchange-confirm.component.html',
  styleUrls: ['./new-exchange-confirm.component.css']
})
export class NewExchangeConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<NewExchangeConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  onClick(): void {
    this.dialogRef.close();
  }

}
