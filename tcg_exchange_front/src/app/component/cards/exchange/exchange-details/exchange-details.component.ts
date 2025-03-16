import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CancelExchangeComponent } from 'src/app/component/popup/cancel-exchange/cancel-exchange.component';
import { FinishExchangeComponent } from 'src/app/component/popup/finish-exchange/finish-exchange.component';
import { ValidationExchangeComponent } from 'src/app/component/popup/validation-exchange/validation-exchange.component';
import { Exchange } from 'src/app/model/exchange';
import { State } from 'src/app/model/state';
import { ExchangeService } from 'src/app/services/exchange.service';
import { formatDistanceToNow } from 'date-fns';

@Component({
  selector: 'app-exchange-details',
  templateUrl: './exchange-details.component.html',
  styleUrls: ['./exchange-details.component.css']
})
export class ExchangeDetailsComponent implements OnInit{
  // exchange?: Exchange;
  copy_code?: boolean = false;
  display_button_cancel?: boolean = false;
  display_button_reject?: boolean = false;
  display_button_accept?: boolean = false;
  display_button_finish?: boolean = false;
  is_user2?: boolean = false;
  timeAgo: string = this.exchange.date!.toString();

  constructor(
        private exchangeSrv: ExchangeService,
        private dialog: MatDialog,
        public dialogRef: MatDialogRef<ExchangeDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) public exchange: Exchange
        ) { }


  ngOnInit(): void {
    this.displayButton();
    this.setIsUser2();
  }

  copyToClipboard(friendCode: String): void {
    let friendCodePrimitive: string = friendCode.toString();
    this.copy_code = true;
    if (friendCodePrimitive) {
      navigator.clipboard.writeText(friendCodePrimitive).then(() => {
        console.log('Friend code copied to clipboard!');
      }).catch((err) => {
        console.error('Failed to copy text: ', err);
      });
    }
  }

  displayButton(){
    if (this.exchange.state === State.ASKED){
      if(this.exchange.user2?.id === JSON.parse(sessionStorage.getItem('user')!)?.id){
        this.display_button_accept = true;
        this.display_button_reject = true;
      }else{
        this.display_button_cancel = true;
      }
    }
    if (this.exchange.state === State.CONFIRMED){
      this.display_button_cancel = true;
      this.display_button_finish = true;
    }
  }

  finishExchange(exchange: Exchange){
    this.dialog.open(FinishExchangeComponent, {width:'300px', height:'130px', data: exchange})
  }

  confirmExchange(exchange: Exchange){
    this.dialog.open(ValidationExchangeComponent, {width:'300px', height:'130px', data: exchange})
  }

  cancelExchange(exchange: Exchange){
    this.dialog.open(CancelExchangeComponent, {width:'300px', height:'250px', data: exchange})
  }

  setIsUser2(){
    if(this.exchange.user2?.id === JSON.parse(sessionStorage.getItem('user')!)?.id){
      this.is_user2 = true;
    }
  }



}
