import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ExchangeService } from 'src/app/services/exchange.service';
import { NewExchangeConfirmComponent } from '../new-exchange-confirm/new-exchange-confirm.component';
import { Exchange } from 'src/app/model/exchange';
import { State } from 'src/app/model/state';

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
        this.exchange.state=State.CANCELED;
        this.exchangeSrv.update(this.exchange).subscribe((exch_update) => {
        window.location.reload();
        this.dialogRef.close();
        });
      }

      cancel(){
        this.dialogRef.close();
      }

}
