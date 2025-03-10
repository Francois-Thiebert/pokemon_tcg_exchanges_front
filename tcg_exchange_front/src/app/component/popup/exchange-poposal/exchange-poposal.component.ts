import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MajWishListComponent } from '../maj-wish-list/maj-wish-list.component';
import { UserService } from 'src/app/services/user.service';
import { CardService } from 'src/app/services/card.service';
import { Exchange } from 'src/app/model/exchange';
import { ExchangeService } from 'src/app/services/exchange.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { NewExchangeConfirmComponent } from '../new-exchange-confirm/new-exchange-confirm.component';
import { NewExchangeValidationComponent } from '../new-exchange-validation/new-exchange-validation.component';
import { ExchangeComponent } from '../../cards/exchange/exchange.component';
import { Role } from 'src/app/model/role';

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
  isAdmin?: boolean = false;
  noResult?: boolean = false;
  isLoading?: boolean = true;

  constructor(
    private userSrv: UserService,
    private cardSrv: CardService,
    private exchangeSrv: ExchangeService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<MajWishListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.userID = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.setIsAdmin();
    this.getRowHeight();
    this.userSrv.getById(this.userID!).subscribe((user: User) => {
        this.exchangeSrv.getNew(this.userID!).subscribe((newExchanges) => {
          this.exchanges = newExchanges;
          this.proposals_number = this.exchanges?.length;
          this.getCollectionImgExchanges();
          if(this.proposals_number < 1){
            this.noResult = true;
          }
          this.isLoading = false;
        });
    });
  }

  getRowHeight(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 500){
      this.rowHeight = '3:2';
    }
    else{
      this.rowHeight = '5:1';
    }
  }

  chooseExchange(exchange: Exchange){
    this.dialog.open(NewExchangeConfirmComponent, {width:'300px', height:'180px', data: exchange});
  }

  getCollectionImgExchanges(){
    for(let e of this.exchanges!){
      this.exchangeSrv.getCollectionImgByExchange(e);
    }
  }

  setIsAdmin(){
    if(JSON.parse(sessionStorage.getItem('user')!)?.role === Role.ROLE_ADMIN){
      this.isAdmin = true;
    }
    console.log("isAdmin = ",this.isAdmin)
  }

}
