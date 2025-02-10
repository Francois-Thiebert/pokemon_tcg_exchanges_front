import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/model/card';
import { User } from 'src/app/model/user';
import { CardService } from 'src/app/services/card.service';
import { IntercompoService } from 'src/app/services/intercompo.service';
import { UserService } from 'src/app/services/user.service';
import { MajWishListComponent } from '../../popup/maj-wish-list/maj-wish-list.component';

interface CardExtended extends Card {
rarity_string?: string;
}


@Component({
  selector: 'app-to-give-cards',
  templateUrl: './to-give-cards.component.html',
  styleUrls: ['./to-give-cards.component.css']
})
export class ToGiveCardsComponent implements OnInit{

  userID?: number;
  screenWidth?: number;
  column_number?: number;
  give_cards_new: CardExtended[] = [];
  give_cards_init: CardExtended[] = [];
  wish_cards_init: CardExtended[] = [];
  card_list?: CardExtended[];
  user?: User;
  update?: boolean = false;
  isInitialized?: boolean = false;

  constructor(
      private userSrv: UserService,
      private intercoSrv: IntercompoService,
      private cardSrv: CardService,
      private dialog: MatDialog,
    ){}

  ngOnInit(): void{
      const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
      this.getColumnNumber();
      this.userID=userId;
      this.intercoSrv.setPageTitle('Cartes à Céder')
      this.cardSrv.allCard().subscribe((cards) => {
        this.card_list=cards;
        this.getCardRarityString(this.card_list);
        this.userSrv.getById(userId).subscribe((user: User) => {
          this.user=user;
          this.give_cards_init = this.give_cards_init.concat(this.user.toGiveList!);
          this.wish_cards_init = this.wish_cards_init.concat(this.user.wishList!);
          this.getToGiveCards();
          this.removeWishedCards();
        })
      })
    }

    removeWishedCards(){
      for (let c of this.card_list!) {
        if (this.wish_cards_init.some(wishCard => wishCard.serialNumber === c.serialNumber)) {
          const index = this.card_list!.indexOf(c);
          if (index !== -1) {
            this.card_list!.splice(index, 1);
          }
        }
      }
    }

    getToGiveCards(){
      for (let c of this.card_list!) {
        if (this.give_cards_init.some(wishCard => wishCard.serialNumber === c.serialNumber)) {
          this.give_cards_new.push(c);
        }
      }
    }

    selectCard(card: CardExtended) {
      const index = this.give_cards_new.indexOf(card);
      if (index !== -1) {
        this.give_cards_new.splice(index, 1);
      } else {
        this.give_cards_new.push(card);
      }
      this.compareGiveLists();
      console.log("to give cards: ",this.give_cards_new)
      console.log(this.update)
    }

    compareGiveLists() {
      if (this.give_cards_new.length !== this.give_cards_init?.length) {
        this.update = true;
      } else {
        const newSerialNumbers = this.give_cards_new.map(card => card.serialNumber).sort();
        const initSerialNumbers = this.give_cards_init.map(card => card.serialNumber).sort();
        const isSame = newSerialNumbers.every((value, index) => value === initSerialNumbers[index]);
        this.update = !isSame;
      }
    }

    getCardRarityString(cards: CardExtended[]) {
      for (let c of cards!){
        if(c.rarity==0){
          c.rarity_string='&#9826;'
        }
        else if(c.rarity==1){
          c.rarity_string='&#9826;&#9826;'
        }
        else if(c.rarity==2){
          c.rarity_string='&#9826;&#9826;&#9826;'
        }
        else if(c.rarity==3){
          c.rarity_string='&#9826;&#9826;&#9826;&#9826;'
        }
        else if(c.rarity==4){
          c.rarity_string='&#9733;'
        }
        };
      }

    getColumnNumber(){
      this.screenWidth = window.innerWidth;
      console.log("screen width: ", this.screenWidth)
      if(this.screenWidth < 500){
        this.column_number = 3;
      }
      else{
        this.column_number = 8;
      }
    }

    updateGiveList(){
          this.user!.toGiveList=this.give_cards_new;
          this.userSrv.update(this.user!).subscribe((user: User) => {
            this.dialog.open(MajWishListComponent, {width:'300px', height:'150px'})
          });
        }

}
