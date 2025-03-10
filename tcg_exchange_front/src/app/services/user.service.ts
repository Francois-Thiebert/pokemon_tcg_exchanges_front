import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjectToJsonService } from './object-to-json.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { loginCheckRest, loginRest, userRest } from '../env';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private convert: ObjectToJsonService) { }

  public allUser(): Observable<User[]> {
    return this.http.get<User[]>(userRest);
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${userRest}/all/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${userRest}/${id}`);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(
      `${userRest}/${user.id}`,
      this.convert.userToJson(user)
    );
  }

  public create(user: User): Observable<User> {
    return this.http.post<User>(
      userRest,
      this.convert.userToJson(user)
    );
  }

  public checkLogin(login: string): Observable<boolean> {
    return this.http.get<boolean>(
      loginCheckRest + login
    );
  }

  public login(login: string, password: string): Observable<User> {
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Basic ' + window.btoa(login + ':' + password),
    });
    return this.http.get<User>(loginRest, { headers: headers });
  }
}
