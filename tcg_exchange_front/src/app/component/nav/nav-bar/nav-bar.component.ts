import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exchange } from 'src/app/model/exchange';
import { Role } from 'src/app/model/role';
import { User } from 'src/app/model/user';
import { ExchangeService } from 'src/app/services/exchange.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router,
    private userSrv: UserService,
    private exchangeSrv: ExchangeService,
  ) {
  }

  user!: User;
  nb_exchanges?: number;

  ngOnInit(): void {
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.userSrv.getById(userId).subscribe((user: User) => {
      this.user = user;
      this.exchangeSrv.getByUserId(userId).subscribe((exchanges: Exchange[]) => {
        this.nb_exchanges=exchanges.length;
      });
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }

  get logged(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  get admin(): boolean {
    if (sessionStorage.getItem('utilisateur')) {
      let utilisateur: User  = JSON.parse(
        sessionStorage.getItem('utilisateur')!
      ) as User;
      return utilisateur.role == Role.ROLE_ADMIN;
    }
    return false;
  }

  get adherent(): boolean {
    if (sessionStorage.getItem('utilisateur')) {
      let utilisateur: User  = JSON.parse(
        sessionStorage.getItem('utilisateur')!
      ) as User;
      return utilisateur.role == Role.ROLE_USER;
    }
    return false;
  }


}
