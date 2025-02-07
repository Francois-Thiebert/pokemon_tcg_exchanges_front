import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pokemonTcgExchange';
  showFiller = false;

  constructor(private router: Router) {}

  get logged(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
