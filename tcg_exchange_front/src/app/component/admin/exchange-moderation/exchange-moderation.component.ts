import { Exchange } from './../../../model/exchange';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-exchange-moderation',
  templateUrl: './exchange-moderation.component.html',
  styleUrls: ['./exchange-moderation.component.css']
})
export class ExchangeModerationComponent implements OnInit  {

  exchanges?: Exchange[];

  constructor(
        private exchangeSrv: ExchangeService,
        private dialog: MatDialog,
      ){}


  ngOnInit(): void {
    this.exchangeSrv.allExchange().subscribe((exchanges: Exchange[]) => {
      this.exchanges = exchanges;
      for (let e of exchanges){
        this.exchangeSrv.getById(e.id!).subscribe((exchange: Exchange) => {
          e.card1 = exchange.card1;
          e.card2 = exchange.card2;
          e.user1 = exchange.user1;
          e.user2 = exchange.user2;
        });
      }
    });
  }

}
