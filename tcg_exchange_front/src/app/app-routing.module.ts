import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './component/log/signin/signin.component';
import { HomeComponent } from './component/nav/home/home.component';
import { ConnectionComponent } from './component/log/connection/connection.component';

const routes: Routes = [
  {path: 'home',
    component: HomeComponent,},
  {path: 'signin',
    component: SigninComponent,},
  {path: 'connection',
    component: ConnectionComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
