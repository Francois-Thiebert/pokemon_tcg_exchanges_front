import { Component, OnInit } from '@angular/core';
import { IntercompoService } from 'src/app/services/intercompo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(
    private intercoSrv: IntercompoService,
  ){}

  ngOnInit(): void{
    this.intercoSrv.setPageTitle('Pokemon TCG Exchanges')
  }

}
