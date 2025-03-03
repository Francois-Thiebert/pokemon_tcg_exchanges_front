import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Exchange } from 'src/app/model/exchange';

@Component({
  selector: 'app-new-exchange-validation',
  templateUrl: './new-exchange-validation.component.html',
  styleUrls: ['./new-exchange-validation.component.css']
})
export class NewExchangeValidationComponent{

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<NewExchangeValidationComponent>,
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
