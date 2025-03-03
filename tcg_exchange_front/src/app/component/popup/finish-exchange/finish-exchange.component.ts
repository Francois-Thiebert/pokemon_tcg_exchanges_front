import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Exchange } from 'src/app/model/exchange';
import { State } from 'src/app/model/state';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-finish-exchange',
  templateUrl: './finish-exchange.component.html',
  styleUrls: ['./finish-exchange.component.css']
})
export class FinishExchangeComponent {

  constructor(
        private exchangeSrv: ExchangeService,
        private dialog: MatDialog,
        public dialogRef: MatDialogRef<FinishExchangeComponent>,
        @Inject(MAT_DIALOG_DATA) public exchange: Exchange
        ) { }

        onClick(){
                this.exchange.state=State.FINISHED;
                this.exchangeSrv.update(this.exchange).subscribe((exch_update) => {
                window.location.reload();
                this.dialogRef.close();
                });
              }

              cancel(){
                this.dialogRef.close();
              }

}
