import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntercompoService } from './services/intercompo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'pokemonTcgExchange';
  showFiller = false;

  constructor(
    private router: Router,
    private intercoSrv: IntercompoService,
    ) {}

  currentPageTitle?: Observable<string>;

  ngOnInit(): void {
    this.currentPageTitle = this.intercoSrv.pageTitle$;
  }

  get logged(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
