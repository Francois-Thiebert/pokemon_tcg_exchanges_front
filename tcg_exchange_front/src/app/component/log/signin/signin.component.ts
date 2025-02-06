import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(
    private userSrv: UserService,
    private router: Router
  ){}

  form!: FormGroup;
  user: User = new User();
  friend_code!: string;
  login: string | undefined;
  password: string | undefined;
  password_check: string | undefined;
  hideA = true;
  hideB = true;

  ngOnInit(): void {
    this.form = new FormGroup({
      friendCode: new FormControl('', Validators.required),

      compteGroup: new FormGroup({
        login: new FormControl(
          '', Validators.required, this.loginFree(this.userSrv)
        ),
        passwordGroup: new FormGroup({
          password: new FormControl(
            '', Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{3,}$/)
          ),
          confirm: new FormControl('',)
        },
        this.passwordAndConfirmEquals
        ),
      },
      this.loginAndPasswordNotEquals
      ),
    });

  }

  passwordAndConfirmEquals(control: AbstractControl): ValidationErrors | null {
    let group = control as FormGroup;
    if (group.get('password')?.invalid) {
      return null;
    }
    return group.get('password')?.value == group.get('confirm')?.value
      ? null
      : { passwordAndConfirmNotEqual: true };
  }

  loginAndPasswordNotEquals(control: AbstractControl): ValidationErrors | null {
    let group = control as FormGroup;
    if (group.get('login')?.invalid) {
      return null;
    }

    return group.get('login')?.value != group.get('passwordGroup.password')?.value
      ? null
      : { loginAndPasswordEquals: true };
  }

  loginFree(srv: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      console.debug('check');
      return this.userSrv.checkLogin(control.value).pipe(
        map((exist: boolean) => {
          return exist ? { loginExist: true } : null;
        })
      );
    };
  }

  submit(){
    this.login=this.form.get('compteGroup.login')?.value,
    this.password=this.form.get('compteGroup.passwordGroup.password')?.value,
    this.friend_code=this.form.get('friendCode')?.value,
    console.log(this.login, this.password, this.friend_code)
    this.user.login = this.login;
    this.user.password = this.password;
    this.user.friendCode = this.friend_code;
    this.userSrv.create(this.user).subscribe((usr) => {
      this.user.id = usr.id; // Set the ID of the user
            this.router.navigateByUrl('/connexion');
          });
  }


}
