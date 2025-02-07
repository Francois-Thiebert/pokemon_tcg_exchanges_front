import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wish-cards',
  templateUrl: './wish-cards.component.html',
  styleUrls: ['./wish-cards.component.css']
})
export class WishCardsComponent implements OnInit{

  userID?: number

  constructor(
    private userSrv: UserService,
  ){}

  ngOnInit(): void{
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.userID=userId;
    console.log(this.userID)
  }

}
