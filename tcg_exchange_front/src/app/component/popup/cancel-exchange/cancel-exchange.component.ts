import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ExchangeService } from 'src/app/services/exchange.service';
import { NewExchangeConfirmComponent } from '../new-exchange-confirm/new-exchange-confirm.component';
import { Exchange } from 'src/app/model/exchange';
import { State } from 'src/app/model/state';
import { CancelExchangeValidationComponent } from '../cancel-exchange-validation/cancel-exchange-validation.component';

@Component({
  selector: 'app-cancel-exchange',
  templateUrl: './cancel-exchange.component.html',
  styleUrls: ['./cancel-exchange.component.css']
})
export class CancelExchangeComponent {

  constructor(
      private exchangeSrv: ExchangeService,
      private dialog: MatDialog,
      public dialogRef: MatDialogRef<CancelExchangeComponent>,
      @Inject(MAT_DIALOG_DATA) public exchange: Exchange
      ) { }

      onClick(){
        this.exchangeSrv.cancel(this.exchange).subscribe((exch_update) => {
        this.dialogRef.close();
        this.dialog.open(CancelExchangeValidationComponent, {width:'300px', height:'175px', data: this.exchange})
        });
      }

      cancel(){
        this.dialogRef.close();
      }

}
