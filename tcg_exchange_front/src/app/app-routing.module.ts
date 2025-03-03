import { NewExchangeConfirmComponent } from './component/popup/new-exchange-confirm/new-exchange-confirm.component';
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
import { AnonymousGuardService } from './services/guardServ/anonymous-guard-service';
import { UserGuardService } from './services/guardServ/user-guard-service';
import { NewExchangeValidationComponent } from './component/popup/new-exchange-validation/new-exchange-validation.component';

const routes: Routes = [
  {path: '',
    component: HomeComponent,},
  {path: 'home',
    component: HomeComponent,},
  {path: 'signin',
    component: SigninComponent,
    canActivate: [AnonymousGuardService],},
  {path: 'connection',
    component: ConnectionComponent,
    canActivate: [AnonymousGuardService],},
  {path: 'wish-cards',
    component: WishCardsComponent,
    canActivate: [UserGuardService],},
  {path: 'to-give-cards',
    component: ToGiveCardsComponent,
    canActivate: [UserGuardService],},
  {path: 'ratio',
    component: RatioComponent,
    canActivate: [UserGuardService],},
  {path: 'exchange',
    component: ExchangeComponent,
    canActivate: [UserGuardService],},
  {path: 'exchange-proposal',
    component: ExchangePoposalComponent,
    canActivate: [UserGuardService],},
  {path: 'new-exchange-confirm',
    component: NewExchangeConfirmComponent,
    canActivate: [UserGuardService],},
  {path: 'new-exchange-validation',
    component: NewExchangeValidationComponent,
    canActivate: [UserGuardService],},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
