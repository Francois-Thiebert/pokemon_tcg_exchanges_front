import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/nav/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog';

import { ConnectionComponent } from './component/log/connection/connection.component';
import { SigninComponent } from './component/log/signin/signin.component';
import { WishCardsComponent } from './component/cards/wish-cards/wish-cards.component';
import { WelcomeComponent } from './component/popup/welcome/welcome.component';
import { NavBarComponent } from './component/nav/nav-bar/nav-bar.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, ConnectionComponent, SigninComponent, WishCardsComponent, WelcomeComponent, NavBarComponent,],
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
