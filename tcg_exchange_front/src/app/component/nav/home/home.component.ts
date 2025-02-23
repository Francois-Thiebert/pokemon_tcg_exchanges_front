import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntercompoService } from 'src/app/services/intercompo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(
    private intercoSrv: IntercompoService,
    private router: Router,
  ){}

  ngOnInit(): void{
    this.intercoSrv.setPageTitle('Pokemon TCG Exchanges')
  }

  login(){
    this.router.navigate(['/connection']);
  }

  signin(){
    this.router.navigate(['/signin']);
  }

}
