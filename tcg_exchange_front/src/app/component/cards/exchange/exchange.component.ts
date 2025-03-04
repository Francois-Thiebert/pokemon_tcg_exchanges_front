import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/model/card';
import { Exchange } from 'src/app/model/exchange';
import { User } from 'src/app/model/user';
import { CardService } from 'src/app/services/card.service';
import { ExchangeService } from 'src/app/services/exchange.service';
import { IntercompoService } from 'src/app/services/intercompo.service';
import { UserService } from 'src/app/services/user.service';
import { ExchangePoposalComponent } from '../../popup/exchange-poposal/exchange-poposal.component';
import { State } from 'src/app/model/state';
import { CancelExchangeComponent } from '../../popup/cancel-exchange/cancel-exchange.component';
import { ValidationExchangeComponent } from '../../popup/validation-exchange/validation-exchange.component';
import { FinishExchangeComponent } from '../../popup/finish-exchange/finish-exchange.component';

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
  exchanges_validation?: Exchange[]=[];
  exchanges_new?: Exchange[]=[];
  exchanges_active?: Exchange[]=[];
  exchanges_old?: Exchange[]=[];
  exchanges_cancel?: Exchange[]=[];
  show_new_exchanges: boolean = false;
  show_val_exchanges: boolean = false;
  show_current_exchanges: boolean = false;
  show_cancel_exchanges: boolean = false;
  show_old_exchanges: boolean = false;
  nb_exch_val?: number;
  nb_exch_new?: number;
  nb_exch_current?: number;
  nb_exch_old?: number;
  nb_exch_cancel?: number;
  isNewDemand?: boolean;

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

finishExchange(exchange: Exchange){
  this.dialog.open(FinishExchangeComponent, {width:'300px', height:'130px', data: exchange})
}

confirmExchange(exchange: Exchange){
  this.dialog.open(ValidationExchangeComponent, {width:'300px', height:'130px', data: exchange})
}

cancelExchange(exchange: Exchange){
  this.dialog.open(CancelExchangeComponent, {width:'300px', height:'130px', data: exchange})
}

getExchanges(user: User){
  this.exchanges1 = user.exchanges1;
  this.exchanges2 = user.exchanges2;
  for (let e of this.exchanges1!){
    if(e.state=='ASKED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.getCollectionImgByExchange(exch);
        this.exchanges_validation=this.exchanges_validation?.concat(exch);
        this.nb_exch_val = this.exchanges_validation?.length;
        console.log("demandes en attente de confirmation: ",this.exchanges_validation);
      });
    }
    if(e.state=='CONFIRMED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.getCollectionImgByExchange(exch);
        this.exchanges_active=this.exchanges_active?.concat(exch);
        this.nb_exch_current=this.exchanges_active?.length;
        console.log("échanges en confirmés, en tant que demandeur: ",this.exchanges_active);
      });
    }
    if(e.state=='FINISHED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.getCollectionImgByExchange(exch);
        this.exchanges_old=this.exchanges_old?.concat(exch);
        this;this.nb_exch_old = this.exchanges_old?.length;
        console.log("échanges en effectués, en tant que demandeur: ",this.exchanges_old);
      });
    }
    if(e.state=='CANCELED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.getCollectionImgByExchange(exch);
        this.exchanges_cancel=this.exchanges_cancel?.concat(exch);
        this.nb_exch_cancel = this.exchanges_cancel?.length;
        console.log("échanges en annulés, en tant que demandeur: ",this.exchanges_cancel);
      });
    }
  }
  for (let e of this.exchanges2!){
    if(e.state=='ASKED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        this.getCollectionImgByExchange(exch);
        this.exchanges_new=this.exchanges_new?.concat(exch);
        this.nb_exch_new = this.exchanges_new?.length;
        if(this.nb_exch_new! > 0){
          this.isNewDemand = true
        }
        console.log("nouvelles demandes: ",this.exchanges_new);
      });
    }
    if(e.state=='CONFIRMED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        let newUser1 = exch.user2;
        let newUser2 = exch.user1;
        let newCard1 = exch.card2;
        let newCard2 = exch.card1;
        exch.user1 = newUser1;
        exch.user2 = newUser2;
        exch.card1 = newCard1;
        exch.card2 = newCard2;
        this.getCollectionImgByExchange(exch);
        this.exchanges_active=this.exchanges_active?.concat(exch);
        this.nb_exch_current = this.exchanges_active?.length;
        console.log("échanges en confirmés, en tant que accepteur: ",this.exchanges_active);
      });
    }if(e.state=='FINISHED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        let newUser1 = exch.user2;
        let newUser2 = exch.user1;
        let newCard1 = exch.card2;
        let newCard2 = exch.card1;
        exch.user1 = newUser1;
        exch.user2 = newUser2;
        exch.card1 = newCard1;
        exch.card2 = newCard2;
        this.getCollectionImgByExchange(exch);
        this.exchanges_old=this.exchanges_old?.concat(exch);
        this.nb_exch_old = this.exchanges_old?.length;
        console.log("échanges en effectués, en tant que accepteur: ",this.exchanges_old);
      });
    }
    if(e.state=='CANCELED'){
      this.exchangeSrv.getById(e.id!).subscribe((exch: Exchange) => {
        let newUser1 = exch.user2;
        let newUser2 = exch.user1;
        let newCard1 = exch.card2;
        let newCard2 = exch.card1;
        exch.user1 = newUser1;
        exch.user2 = newUser2;
        exch.card1 = newCard1;
        exch.card2 = newCard2;
        this.getCollectionImgByExchange(exch);
        this.exchanges_cancel=this.exchanges_cancel?.concat(exch);
        this.nb_exch_cancel = this.exchanges_cancel?.length;
        console.log("échanges en annulés, en tant que accepteur: ",this.exchanges_cancel);
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
    this.row_siez="3:2"
  }
}

click_current_exchanges() {
  if (this.show_current_exchanges) {
    this.show_current_exchanges = false;
  } else {
    this.show_current_exchanges = true;
  }
  console.log(this.show_current_exchanges);
}
click_new_exchanges() {
  if (this.show_new_exchanges) {
    this.show_new_exchanges = false;
  } else {
    this.show_new_exchanges = true;
  }
  console.log(this.show_new_exchanges);
}
click_val_exchanges() {
  if (this.show_val_exchanges) {
    this.show_val_exchanges = false;
  } else {
    this.show_val_exchanges = true;
  }
  console.log(this.show_val_exchanges);
}
click_old_exchanges() {
  if (this.show_old_exchanges) {
    this.show_old_exchanges = false;
  } else {
    this.show_old_exchanges = true;
  }
  console.log(this.show_old_exchanges);
}
click_cancel_exchanges() {
  if (this.show_cancel_exchanges) {
    this.show_cancel_exchanges = false;
  } else {
    this.show_cancel_exchanges = true;
  }
  console.log(this.show_cancel_exchanges);
}

copyToClipboard(friendCode: String): void {
  let friendCodePrimitive: string = friendCode.toString();
  if (friendCodePrimitive) {
    navigator.clipboard.writeText(friendCodePrimitive).then(() => {
      console.log('Friend code copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  }
}

getCollectionImgByCard(card: Card){
  if (card.collection === 0) {
    card.collection_img = "assets/images/puissance-genetique.png";
  } else if (card.collection === 1) {
    card.collection_img = "assets/images/ile-fabuleuse.png";
  } else if (card.collection === 2) {
    card.collection_img = "assets/images/choc-spatio-temporel.png";
  } else if (card.collection === 3) {
    card.collection_img = "assets/images/lumiere-triomphale.png";
  }else {
    card.collection_img = undefined;
  }
}

getCollectionImgByExchange(exchange: Exchange){
    this.getCollectionImgByCard(exchange.card1!);
    this.getCollectionImgByCard(exchange.card2!);
}


}
