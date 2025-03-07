import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IntercompoService } from './services/intercompo.service';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { User } from './model/user';
import { UserService } from './services/user.service';
import { Role } from './model/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'pokemonTcgExchange';
  showFiller = false;
  user!: User;
  isWhishPage: boolean = false;
  isGivePage: boolean = false;
  isExchangePage: boolean = false;
  isOther: boolean = false;
  isAuth: boolean = false;

  constructor(
    private router: Router,
    private intercoSrv: IntercompoService,
    private userSrv: UserService,
    ) {}

  currentPageTitle?: String;

  ngOnInit(): void {
    this.intercoSrv.pageTitle$.subscribe((pageTitle: string) => {
      this.currentPageTitle = pageTitle;
        if (this.currentPageTitle === "Échanges") {
          this.isExchangePage = true;
          this.isWhishPage = false;
          this.isGivePage = false;
          this.isOther = false;
        } else if (this.currentPageTitle === "Cartes Recherchées") {
          this.isWhishPage = true;
          this.isExchangePage = false;
          this.isGivePage = false;
          this.isOther = false;
        } else if (this.currentPageTitle === "Cartes à Céder") {
          this.isGivePage = true;
          this.isExchangePage = false;
          this.isWhishPage = false;
          this.isOther = false;
        } else {
          this.isOther = true;
        }

      console.log("isOther page : "+this.isOther);
      console.log("isWish page : "+this.isWhishPage);
    });
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.userSrv.getById(userId).subscribe((user: User) => {
      this.user = user;
    });
  }

  get logged(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }

  get admin(): boolean {
    if (sessionStorage.getItem('user')) {
      let user: User  = JSON.parse(
        sessionStorage.getItem('user')!
      ) as User;
      return user.role == Role.ROLE_ADMIN;
    }
    return false;
  }

  get adherent(): boolean {
    if (sessionStorage.getItem('user')) {
      let user: User  = JSON.parse(
        sessionStorage.getItem('user')!
      ) as User;
      return user.role == Role.ROLE_USER;
    }
    return false;
  }

}

