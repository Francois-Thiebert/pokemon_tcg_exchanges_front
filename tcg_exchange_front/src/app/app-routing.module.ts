import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './component/log/signin/signin.component';
import { HomeComponent } from './component/nav/home/home.component';
import { ConnectionComponent } from './component/log/connection/connection.component';
import { WishCardsComponent } from './component/cards/wish-cards/wish-cards.component';
import { WelcomeComponent } from './component/popup/welcome/welcome.component';

const routes: Routes = [
  {path: '',
    component: HomeComponent,},
  {path: 'home',
    component: HomeComponent,},
  {path: 'signin',
    component: SigninComponent,},
  {path: 'connection',
    component: ConnectionComponent,},
  {path: 'wish-cards',
    component: WishCardsComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
