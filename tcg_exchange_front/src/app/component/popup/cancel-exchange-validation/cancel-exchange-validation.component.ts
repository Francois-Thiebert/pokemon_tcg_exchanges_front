import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cause } from 'src/app/model/cause';
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
    @Inject(MAT_DIALOG_DATA) public data: { exchange: Exchange, cause: Cause }
  ) { }

  exchange_send: Exchange = this.data.exchange;
  cause: Cause = this.data.cause;

    onClick(): void {
      this.dialogRef.close();
      this.dialog.closeAll();
      window.location.reload();
    }

}
