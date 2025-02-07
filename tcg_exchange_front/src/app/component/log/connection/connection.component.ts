import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {

    constructor(
      private userSrv: UserService,
      private router: Router,
    ){}

form!: FormGroup;
user: User = new User();
login: string = '';
password: string = '';
hideA = true;
hideB = true;
showError = false;

ngOnInit(): void {
    this.form = new FormGroup({
      credentials: new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      })
    })

  }

  submit(){
    this.login=this.form.get('credentials.login')?.value,
    this.password=this.form.get('credentials.password')?.value
    console.log(this.login, this.password)

    this.userSrv.login(this.login!, this.password!).subscribe({
      next: (infos: User) => {
        this.showError = false;
        sessionStorage.setItem(
          'token',
          'Basic ' + window.btoa(this.login + ':' + this.password)
        );
        sessionStorage.setItem('user', JSON.stringify(infos));
        this.router.navigateByUrl('/wish-cards');
      },
      error: (error: any) => {
        console.debug(error);
        this.showError = true;
      },
    });
  }

}
