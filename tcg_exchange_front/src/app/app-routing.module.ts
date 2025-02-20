import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './component/log/signin/signin.component';
import { HomeComponent } from './component/nav/home/home.component';
import { ConnectionComponent } from './component/log/connection/connection.component';
import { WishCardsComponent } from './component/cards/wish-cards/wish-cards.component';
import { WelcomeComponent } from './component/popup/welcome/welcome.component';
import { ToGiveCardsComponent } from './component/cards/to-give-cards/to-give-cards.component';
import { ExchangeComponent } from './component/cards/exchange/exchange.component';
import { RatioComponent } from './component/cards/ratio/ratio.component';
import { ExchangePoposalComponent } from './component/popup/exchange-poposal/exchange-poposal.component';

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
  {path: 'to-give-cards',
    component: ToGiveCardsComponent,},
  {path: 'ratio',
    component: RatioComponent,},
  {path: 'exchange',
    component: ExchangeComponent,},
  {path: 'exchange-proposal',
    component: ExchangePoposalComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
