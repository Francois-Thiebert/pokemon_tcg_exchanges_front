import { AuthInterceptor } from './interceptor/auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/nav/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';

import { ConnectionComponent } from './component/log/connection/connection.component';
import { SigninComponent } from './component/log/signin/signin.component';
import { WishCardsComponent } from './component/cards/wish-cards/wish-cards.component';
import { WelcomeComponent } from './component/popup/welcome/welcome.component';
import { NavBarComponent } from './component/nav/nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MajWishListComponent } from './component/popup/maj-wish-list/maj-wish-list.component';
import { ToGiveCardsComponent } from './component/cards/to-give-cards/to-give-cards.component';
import { ExchangeComponent } from './component/cards/exchange/exchange.component';
import { RatioComponent } from './component/cards/ratio/ratio.component';
import { ExchangePoposalComponent } from './component/popup/exchange-poposal/exchange-poposal.component';
import { NewExchangeConfirmComponent } from './component/popup/new-exchange-confirm/new-exchange-confirm.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NewExchangeValidationComponent } from './component/popup/new-exchange-validation/new-exchange-validation.component';
import { CancelExchangeComponent } from './component/popup/cancel-exchange/cancel-exchange.component';
import { ValidationExchangeComponent } from './component/popup/validation-exchange/validation-exchange.component';
import { FinishExchangeComponent } from './component/popup/finish-exchange/finish-exchange.component';
import { CancelExchangeValidationComponent } from './component/popup/cancel-exchange-validation/cancel-exchange-validation.component';
import { ExchangeDetailsComponent } from './component/cards/exchange/exchange-details/exchange-details.component';




@NgModule({
  declarations: [AppComponent, HomeComponent, ConnectionComponent, SigninComponent, WishCardsComponent, WelcomeComponent, NavBarComponent, MajWishListComponent, ToGiveCardsComponent, ExchangeComponent, RatioComponent, ExchangePoposalComponent, NewExchangeConfirmComponent, NewExchangeValidationComponent, CancelExchangeComponent, ValidationExchangeComponent, FinishExchangeComponent, CancelExchangeValidationComponent, ExchangeDetailsComponent,],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatGridListModule,
    MatBadgeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
