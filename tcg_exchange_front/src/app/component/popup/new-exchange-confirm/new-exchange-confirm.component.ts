import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Exchange } from 'src/app/model/exchange';
import { ExchangeService } from 'src/app/services/exchange.service';
import { NewExchangeValidationComponent } from '../new-exchange-validation/new-exchange-validation.component';
import { ExchangePoposalComponent } from '../exchange-poposal/exchange-poposal.component';

@Component({
  selector: 'app-new-exchange-confirm',
  templateUrl: './new-exchange-confirm.component.html',
  styleUrls: ['./new-exchange-confirm.component.css']
})
export class NewExchangeConfirmComponent {

  constructor(
    private exchangeSrv: ExchangeService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<NewExchangeConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public exchange: Exchange
    ) { }

  exchange_confirm: Exchange = this.exchange;

  send(){
      console.log("exchange récupéré dans confirm: ",this.exchange.card1)
      this.exchangeSrv.create(this.exchange).subscribe((exch) => {
        this.dialogRef.close();
        this.dialog.open(NewExchangeValidationComponent, {width:'300px', height:'175px', data: this.exchange})
      });
    }

  cancel(): void {
    this.dialogRef.close();
  }

}
