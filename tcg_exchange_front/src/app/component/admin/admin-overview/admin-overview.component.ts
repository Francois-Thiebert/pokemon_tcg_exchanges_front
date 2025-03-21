import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExchangeService } from 'src/app/services/exchange.service';
import { IntercompoService } from 'src/app/services/intercompo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit{

  numberUserTotal?: number;
  numberUserActive?: number;
  numberUserBlocked?: number;
  numberExchangeCurrent?: number;
  numberExchangeFinished?: number;

  constructor(
      private userSrv: UserService,
      private exchangeSrv: ExchangeService,
      private intercoSrv: IntercompoService,
      private dialog: MatDialog,
    ){}

  ngOnInit(): void {
  this.intercoSrv.setPageTitle('Modération')
  this.getTotalUsers();
  this.getActiveUsers();
  this.getBlockedUsers();
  this.getCurrentExchanges();
  this.getFinishedExchanges();
  }

  getTotalUsers(){
    this.userSrv.userNumberTotal().subscribe((nb_total: number) => {
      this.numberUserTotal=nb_total;
    });
  }
  getActiveUsers(){
    this.userSrv.userNumberActive().subscribe((nb_active: number) => {
      this.numberUserActive=nb_active;
    });
  }
  getBlockedUsers(){
    this.userSrv.userNumberBlocked().subscribe((nb_blocked: number) => {
      this.numberUserBlocked=nb_blocked;
    });
  }
  getCurrentExchanges(){
    this.exchangeSrv.exchangeNumberCurrent().subscribe((nb: number) => {
      this.numberExchangeCurrent=nb;
    });
  }
  getFinishedExchanges(){
    this.exchangeSrv.exchangeNumberFinished().subscribe((nb: number) => {
      this.numberExchangeFinished=nb;
    });
  }

}
