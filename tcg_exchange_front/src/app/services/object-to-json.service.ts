import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ObjectToJsonService {

  constructor() { }

  public userToJson(user: User): any {
    let obj = {
      login: user.login,
      password: user.password,
      role: user.role,
      friendCode: user.friendCode,
      wishLiset: user.wishList,
      toGiveList : user.toGiveList

  }
  if (user.id) {
    Object.assign(obj, { id: user.id });
  }
  return obj;
  }
}
