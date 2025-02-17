import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/model/card';
import { Exchange } from 'src/app/model/exchange';
import { User } from 'src/app/model/user';
import { CardService } from 'src/app/services/card.service';
import { ExchangeService } from 'src/app/services/exchange.service';
import { IntercompoService } from 'src/app/services/intercompo.service';
import { UserService } from 'src/app/services/user.service';
import { ExchangePoposalComponent } from '../../popup/exchange-poposal/exchange-poposal.component';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit{

  userID?: number;
  user?: User;
  screenWidth?: number;
  column_number?: number;
  row_siez?: String;
  exchanges?: Exchange[]=[];
  exchanges1?: Exchange[]=[];
  exchanges2?: Exchange[]=[];
  exchanges1_validation?: Exchange[]=[];
  exchanges2_new?: Exchange[]=[];
  exchanges1_active?: Exchange[]=[];
  exchanges2_active?: Exchange[]=[];
  exchanges1_old?: Exchange[]=[];
  exchanges2_old?: Exchange[]=[];
  exchanges1_cancel?: Exchange[]=[];
  exchanges2_cancel?: Exchange[]=[];

  constructor(
    private userSrv: UserService,
    private exchangeSrv: ExchangeService,
    private intercoSrv: IntercompoService,
    private cardSrv: CardService,
    private dialog: MatDialog,
  ){}

ngOnInit(): void {
  this.userID = JSON.parse(sessionStorage.getItem('user')!)?.id;
  this.getDisplay();
  this.intercoSrv.setPageTitle('Échanges')
  this.userSrv.getById(this.userID!).subscribe((user: User) => {
    this.user=user;
    this.getExchanges(user);
  });

}

findExchange(){
  this.dialog.open(ExchangePoposalComponent, {width:'90%', height:'90%'})
}

getExchanges(user: User){
  this.exchanges1 = user.exchanges1;
  this.exchanges2 = user.exchanges2;
  for (let e of this.exchanges1!){
    if(e.state=='ASKED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.exchanges1_validation=this.exchanges1_validation?.concat(exch);
        console.log("demandes en attente de confirmation: ",this.exchanges1_validation);
      });
    }
    if(e.state=='CONFIRMED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.exchanges1_active=this.exchanges1_active?.concat(exch);
        console.log("échanges en confirmés, en tant que demandeur: ",this.exchanges1_active);
      });
    }
    if(e.state=='FINISHED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.exchanges1_old=this.exchanges1_old?.concat(exch);
        console.log("échanges en effectués, en tant que demandeur: ",this.exchanges1_old);
      });
    }
    if(e.state=='CANCELED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.exchanges1_cancel=this.exchanges1_cancel?.concat(exch);
        console.log("échanges en annulés, en tant que demandeur: ",this.exchanges1_cancel);
      });
    }
  }
  for (let e of this.exchanges2!){
    if(e.state=='ASKED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.exchanges2_new=this.exchanges2_new?.concat(exch);
        console.log("nouvelles demandes: ",this.exchanges2_new);
      });
    }
    if(e.state=='CONFIRMED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.exchanges2_active=this.exchanges2_active?.concat(exch);
        console.log("échanges en confirmés, en tant que accepteur: ",this.exchanges2_active);
      });
    }if(e.state=='FINISHED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.exchanges2_old=this.exchanges2_old?.concat(exch);
        console.log("échanges en effectués, en tant que accepteur: ",this.exchanges2_old);
      });
    }
    if(e.state=='CANCELED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.exchanges2_cancel=this.exchanges2_cancel?.concat(exch);
        console.log("échanges en annulés, en tant que accepteur: ",this.exchanges2_cancel);
      });
    }
  }
}

getDisplay(){
  this.screenWidth = window.innerWidth;
  console.log("screen width: ", this.screenWidth)
  if(this.screenWidth < 500){
    this.column_number = 3;
    this.row_siez="3:2"
  }
  else{
    this.column_number = 5;
    this.row_siez="2:1"
  }
}

}
