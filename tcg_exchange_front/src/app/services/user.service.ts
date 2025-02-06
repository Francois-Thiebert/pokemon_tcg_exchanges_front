import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectToJsonService } from './object-to-json.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { userRest } from '../env';

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

  public getByMatchs(UserId: number): Observable<User[]> {
    return this.http.get<User[]>(`${userRest}/matchs/${UserId}`);
  }

  public getIdsByMatchs(UserId: number): Observable<number[]> {
    return this.http.get<number[]>(`${userRest}/idByMatchs/${UserId}`);
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
      'http://localhost:8080/tcgexchanges/api/user/login/check/' + login
    );
  }
}
