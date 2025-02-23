import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MajWishListComponent } from '../maj-wish-list/maj-wish-list.component';
import { UserService } from 'src/app/services/user.service';
import { CardService } from 'src/app/services/card.service';
import { Exchange } from 'src/app/model/exchange';
import { ExchangeService } from 'src/app/services/exchange.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange-poposal',
  templateUrl: './exchange-poposal.component.html',
  styleUrls: ['./exchange-poposal.component.css']
})
export class ExchangePoposalComponent implements OnInit{

  userID?: number;
  user?: User;
  exchanges?: Exchange[];
  choosedExchange?: Exchange;
  proposals_number?: number;
  rowHeight?: any;
  screenWidth?: number;

  constructor(
    private userSrv: UserService,
    private cardSrv: CardService,
    private exchangeSrv: ExchangeService,
    private router: Router,
    public dialogRef: MatDialogRef<MajWishListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.userID = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.getRowHeight();
    this.userSrv.getById(this.userID!).subscribe((user: User) => {
        this.exchangeSrv.getNew(this.userID!).subscribe((newExchanges) => {
          this.exchanges = newExchanges;
          this.proposals_number = this.exchanges?.length;
          console.log(this.proposals_number,this.exchanges);
        });
    });
  }

  getRowHeight(){
    this.screenWidth = window.innerWidth;
    console.log("screen width: ", this.screenWidth)
    if(this.screenWidth < 500){
      this.rowHeight = '3:2';
    }
    else{
      this.rowHeight = '5:1';
    }
  }

  chooseExchange(exchange: Exchange){
    this.exchangeSrv.create(exchange).subscribe((exch) => {
      this.dialogRef.close();
      this.router.navigateByUrl('/exchange');
      window.location.reload();
    });
  }

}
