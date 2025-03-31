import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjectToJsonService } from './object-to-json.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { loginCheckRest, loginRest, srvRest, userRest } from '../env';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private convert: ObjectToJsonService) { }

  public allUser(): Observable<User[]> {
    return this.http.get<User[]>(`${userRest}/adm/all`);
  }

  public userNumberTotal(): Observable<number>{
    return this.http.get<number>(`${userRest}/adm/number`);
  }
  public userNumberActive(): Observable<number>{
    return this.http.get<number>(`${userRest}/adm/numberActive`);
  }
  public userNumberBlocked(): Observable<number>{
    return this.http.get<number>(`${userRest}/adm/numberBlocked`);
  }
  public wishCardNumberByUser(id: number): Observable<number>{
    return this.http.get<number>(`${userRest}/NumberWishedCards/${id}`);
  }
  public toGiveCardNumberByUser(id: number): Observable<number>{
    return this.http.get<number>(`${userRest}/NumberToGiveCards/${id}`);
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

  public isBlocked(userID: number): Observable<boolean> {
    return this.http.get<boolean>(`${userRest}/isBlocked/${userID}`);
  }

  public connectionsSinceUpdate(userID: number): Observable<void> {
    return this.http.get<void>(`${userRest}/connectionSinceUpdate/${userID}`);
  }

  public hasAskedUnblocking(userID: number): Observable<boolean> {
    return this.http.get<boolean>(`${userRest}/hasAskedUnblocking/${userID}`);
  }

  public askUnblocking(userID: number): Observable<void> {
    return this.http.get<void>(`${userRest}/askUnblocking/${userID}`);
  }

  public login(login: string, password: string): Observable<User> {
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Basic ' + window.btoa(login + ':' + password),
    });
    return this.http.get<User>(loginRest, { headers: headers });
  }

  public traceVisit(): Observable<void> {
    return this.http.get<void>(`${srvRest}/auth/trace`);
  }
}
