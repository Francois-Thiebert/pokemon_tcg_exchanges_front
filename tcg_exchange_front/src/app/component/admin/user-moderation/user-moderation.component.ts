import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Exchange } from 'src/app/model/exchange';
import { User } from 'src/app/model/user';
import { ExchangeService } from 'src/app/services/exchange.service';
import { UserService } from 'src/app/services/user.service';

interface UserExteded extends User {
  exchanges?: Exchange[];
  nb_exchanges?: number;
  nb_wish_cards?: number;
  nb_give_cards?: number;
  }

@Component({
  selector: 'app-user-moderation',
  templateUrl: './user-moderation.component.html',
  styleUrls: ['./user-moderation.component.css']
})
export class UserModerationComponent implements OnInit {

  users?: UserExteded[];

  constructor(
      private userSrv: UserService,
      private exchangeSrv: ExchangeService,
      private dialog: MatDialog,
    ){}

    ngOnInit(): void {
      this.userSrv.allUser().subscribe((users: User[]) => {
        this.users = users;
        for (let u of this.users) {
          this.exchangeSrv.exchangeNumberByUser(u.id!).subscribe((nb: number) => {
            u.nb_exchanges = nb;
          });
          this.userSrv.wishCardNumberByUser(u.id!).subscribe((nb: number) => {
            u.nb_wish_cards = nb;
          });
          this.userSrv.toGiveCardNumberByUser(u.id!).subscribe((nb: number) => {
            u.nb_give_cards = nb;
          });
        }
      });
    }

    // filterSelect(){

    // }

}
