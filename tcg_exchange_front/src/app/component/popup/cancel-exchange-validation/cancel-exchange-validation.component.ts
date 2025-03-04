import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Exchange } from 'src/app/model/exchange';

@Component({
  selector: 'app-cancel-exchange-validation',
  templateUrl: './cancel-exchange-validation.component.html',
  styleUrls: ['./cancel-exchange-validation.component.css']
})
export class CancelExchangeValidationComponent {

  constructor(
      private router: Router,
      public dialogRef: MatDialogRef<CancelExchangeValidationComponent>,
      private dialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public exch: Exchange
      ) { }

  exchange_send: Exchange = this.exch;

    onClick(): void {
      this.dialogRef.close();
      this.dialog.closeAll();
      window.location.reload();
    }

}
