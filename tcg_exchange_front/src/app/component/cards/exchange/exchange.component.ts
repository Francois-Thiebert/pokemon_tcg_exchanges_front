import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/model/card';
import { User } from 'src/app/model/user';
import { CardService } from 'src/app/services/card.service';
import { IntercompoService } from 'src/app/services/intercompo.service';
import { UserService } from 'src/app/services/user.service';

interface CardExtended extends Card {
  rarity_string?: string;
  }

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit{

    userID?: number;
    screenWidth?: number;
    column_number?: number;
    give_cards_init: Card[] = [];
    wish_cards_init: Card[] = [];
    user?: User;

    giveRarity0: number = 0;
    giveRarity1: number = 0;
    giveRarity2: number = 0;
    giveRarity3: number = 0;
    giveRarity4: number = 0;
    wishRarity0: number = 0;
    wishRarity1: number = 0;
    wishRarity2: number = 0;
    wishRarity3: number = 0;
    wishRarity4: number = 0;

    constructor(
        private userSrv: UserService,
        private intercoSrv: IntercompoService,
        private cardSrv: CardService,
        private dialog: MatDialog,
      ){}

  ngOnInit(): void{
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.userID=userId;
    this.intercoSrv.setPageTitle('Mes Échanges')
    this.userSrv.getById(userId).subscribe((user: User) => {
    this.user=user;
    this.give_cards_init = this.give_cards_init.concat(this.user.toGiveList!);
    this.wish_cards_init = this.wish_cards_init.concat(this.user.wishList!);
    this.getGiveCardRarityNumbers();
    this.getWishCardRarityNumbers();
    console.log("rarity to give:",this.giveRarity0, this.giveRarity1, this.giveRarity2, this.giveRarity3, this.giveRarity4);
    console.log("rarity wished:",this.wishRarity0, this.wishRarity1, this.wishRarity2, this.wishRarity3, this.giveRarity4);
      })
    }

  getWishCardRarityNumbers(){
    for (let c of this.wish_cards_init!) {
      if (c.rarity == 0){
        this.wishRarity0++;
      }
      else if (c.rarity == 1){
        this.wishRarity1++;
      }
      else if (c.rarity == 2){
        this.wishRarity2++;
      }
      else if (c.rarity == 3){
        this.wishRarity3++;
      }
      else if (c.rarity == 4){
        this.wishRarity4++;
      }
    }
  }

  getGiveCardRarityNumbers(){
    for (let c of this.give_cards_init!) {
      if (c.rarity == 0){
        this.giveRarity0++;
      }
      else if (c.rarity == 1){
        this.giveRarity1++;
      }
      else if (c.rarity == 2){
        this.giveRarity2++;
      }
      else if (c.rarity == 3){
        this.giveRarity3++;
      }
      else if (c.rarity == 4){
        this.giveRarity4++;
      }
    }
  }

}
