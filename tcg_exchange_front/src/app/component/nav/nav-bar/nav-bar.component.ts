import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Exchange } from 'src/app/model/exchange';
import { Role } from 'src/app/model/role';
import { User } from 'src/app/model/user';
import { ExchangeService } from 'src/app/services/exchange.service';
import { IntercompoService } from 'src/app/services/intercompo.service';
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
    private intercoSrv: IntercompoService,
  ) {
  }

  user!: User;
  nb_exchanges?: number;
  currentPageTitle?: Observable<string>;

  ngOnInit(): void {
    this.currentPageTitle = this.intercoSrv.pageTitle$;
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.userSrv.getById(userId).subscribe((user: User) => {
      this.user = user;
      console.log(this.user.role)
      // this.exchangeSrv.getByUserId(userId).subscribe((exchanges: Exchange[]) => {
      //   this.nb_exchanges=exchanges.length;
      // });
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
