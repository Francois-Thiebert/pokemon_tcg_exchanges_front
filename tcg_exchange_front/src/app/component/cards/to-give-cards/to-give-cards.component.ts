import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/model/card';
import { User } from 'src/app/model/user';
import { CardService } from 'src/app/services/card.service';
import { IntercompoService } from 'src/app/services/intercompo.service';
import { UserService } from 'src/app/services/user.service';
import { MajWishListComponent } from '../../popup/maj-wish-list/maj-wish-list.component';
import { HelpToGiveComponent } from '../../popup/help-to-give/help-to-give.component';

// interface CardExtended extends Card {
// rarity_string?: string;
// }


@Component({
  selector: 'app-to-give-cards',
  templateUrl: './to-give-cards.component.html',
  styleUrls: ['./to-give-cards.component.css']
})
export class ToGiveCardsComponent implements OnInit{

  userID?: number;
  screenWidth?: number;
  column_number?: number;
  // give_cards_new: CardExtended[] = [];
  // give_cards_init: CardExtended[] = [];
  // wish_cards_init: CardExtended[] = [];
  // card_list?: CardExtended[];
  // card_list_display?: CardExtended[];
  give_cards_new: Card[] = [];
  give_cards_init: Card[] = [];
  wish_cards_init: Card[] = [];
  card_list?: Card[];
  card_list_display?: Card[];
  user?: User;
  update?: boolean = false;
  isInitialized?: boolean = false;
  filterType?: any;
  filterRarity?: any;
  filterCollection?: any;
  filterSelected?: any;

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
        this.card_list_display=this.card_list;
        this.sortCards(this.card_list);
        // this.getCardRarityString(this.card_list);
        this.userSrv.getById(userId).subscribe((user: User) => {
          this.user=user;
          this.give_cards_init = this.give_cards_init.concat(this.user.toGiveList!);
          this.wish_cards_init = this.wish_cards_init.concat(this.user.wishList!);
          this.getToGiveCards();
          this.removeWishedCards();
        })
      })
    }

    filterCard(cards: Card[]): Card[] {
      if (this.filterType != null && this.filterType != "*") {
        cards = cards.filter(c => c.type === this.filterType);
      }
      if (this.filterRarity != null && this.filterRarity != "*") {
        cards = cards.filter(c => c.rarity == this.filterRarity);
      }
      if (this.filterCollection != null && this.filterCollection != "*") {
        cards = cards.filter(c => c.collection == this.filterCollection);
      }
      if (this.filterSelected !== null && this.filterSelected !== "*") {
        if (this.filterSelected === 'true') {
          cards = cards.filter(c => this.give_cards_new.includes(c));
        } else {
          cards = cards.filter(c => !this.give_cards_new.includes(c));
        }
      }
      return cards;
    }

    sortCards(cards: Card[]) {
      let collectionNumber: number = 0;
      let collectionNumberInit: number = -1;

      for (let c of cards) {
        if (c.collection! > collectionNumberInit) {
          collectionNumber++;
          collectionNumberInit++;
        }
      }
      while (collectionNumberInit >= 0) {
        console.log("Déplacement de la collection ", collectionNumberInit);
        const currentCollectionCards = cards.filter(c => c.collection === collectionNumberInit);
        currentCollectionCards.sort((a, b) => {
          const [aSerialPart1] = a.serialNumber!.split('/').map(Number);
          const [bSerialPart1] = b.serialNumber!.split('/').map(Number);
          return bSerialPart1 - aSerialPart1;
        });

        for (let c of currentCollectionCards) {
          let index = cards.indexOf(c);
          const element = cards.splice(index, 1)[0];
          cards.unshift(element);
          console.log(c.name, "a été replacé en première place");
        }

        collectionNumberInit--;
      }

      console.log("Nombre de collections: ", collectionNumber);
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

    selectCard(card: Card) {
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

  filterSelect() {
      this.card_list_display = this.filterCard(this.card_list!);
      console.log("rareté: ", this.filterCollection)
      console.log(this.card_list_display?.length)
      console.log(this.card_list_display)
    }

  help(){
    this.dialog.open(HelpToGiveComponent, {width:'80%', height:'35%'})
  }

}
