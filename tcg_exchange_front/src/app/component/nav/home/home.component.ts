import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntercompoService } from 'src/app/services/intercompo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(
    private intercoSrv: IntercompoService,
    private userSrv: UserService,
    private router: Router,
  ){}

  ngOnInit(): void{
    this.userSrv.traceVisit().subscribe(() => {});
    this.intercoSrv.setPageTitle('Pokemon TCG Exchanges');
  }

  login(){
    this.router.navigate(['/connection']);
  }

  signin(){
    this.router.navigate(['/signin']);
  }

}
