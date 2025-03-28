import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ExchangeService } from 'src/app/services/exchange.service';
import { NewExchangeConfirmComponent } from '../new-exchange-confirm/new-exchange-confirm.component';
import { Exchange } from 'src/app/model/exchange';
import { State } from 'src/app/model/state';
import { CancelExchangeValidationComponent } from '../cancel-exchange-validation/cancel-exchange-validation.component';
import { Cause } from 'src/app/model/cause';

@Component({
  selector: 'app-cancel-exchange',
  templateUrl: './cancel-exchange.component.html',
  styleUrls: ['./cancel-exchange.component.css']
})
export class CancelExchangeComponent implements OnInit{

  cause?: Cause;
  selected?: boolean = false;
  isDemand?: boolean = false;
  userid: number = JSON.parse(sessionStorage.getItem('user')!)?.id;

  constructor(
      private exchangeSrv: ExchangeService,
      private dialog: MatDialog,
      public dialogRef: MatDialogRef<CancelExchangeComponent>,
      @Inject(MAT_DIALOG_DATA) public exchange: Exchange
      ) { }

  ngOnInit(): void {
    if (this.exchange.state === State.ASKED && this.exchange.user2?.id === this.userid){
      this.isDemand=true;
    }
  }


      onClick(){
        this.exchangeSrv.cancel(this.exchange, this.userid, this.cause!).subscribe((exch_update) => {
        this.dialogRef.close();
        this.dialog.open(CancelExchangeValidationComponent, {width:'300px', height:'175px', data: { exchange: this.exchange, cause: this.cause }})
        });
      }

      cancel(){
        this.dialogRef.close();
      }

      selectCause(){
        this.selected=true;
        console.log("cause : "+this.cause)
      }

}
