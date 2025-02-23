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

  constructor(
    private router: Router,
    private intercoSrv: IntercompoService,
        private userSrv: UserService,
    ) {}

  currentPageTitle?: Observable<string>;

  ngOnInit(): void {
    this.currentPageTitle = this.intercoSrv.pageTitle$;
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
