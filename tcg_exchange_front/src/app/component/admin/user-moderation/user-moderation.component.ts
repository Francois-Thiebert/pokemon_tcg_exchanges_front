import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Exchange } from 'src/app/model/exchange';
import { User } from 'src/app/model/user';
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
      private dialog: MatDialog,
    ){}

    ngOnInit(): void {
      this.userSrv.allUser().subscribe((users: User[]) => {
        this.users = users;
        for (let u of this.users) {
          this.userSrv.getById(u.id!).subscribe((user: User) => {
            u.exchanges = user.exchanges1!;
            u.exchanges = u.exchanges?.concat(user.exchanges2!);
            u.wishList = user.wishList;
            u.nb_wish_cards = u.wishList?.length;
            u.toGiveList = user.toGiveList;
            u.nb_give_cards = u.toGiveList?.length;
          });
        }
      });
    }

    // filterSelect(){

    // }

}
