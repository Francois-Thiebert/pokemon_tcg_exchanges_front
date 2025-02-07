import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Card } from '../model/card';
import { Exchange } from '../model/exchange';

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

  public cardToJson(card: Card): any {
    let obj = {
      name: card.name,
      rarity: card.rarity,
      serialNumber: card.serialNumber,
      picture: card.picture,
      wisher: card.wisher,
      giver: card.giver,
  }
  if (card.id) {
    Object.assign(obj, { id: card.id });
  }
  return obj;
  }

  public exchangeToJson(exchange: Exchange): any {
    let obj = {
      card1: exchange.card1,
      card2: exchange.card2,
      date: exchange.date,
      user1: exchange.user1,
      user2: exchange.user2,
  }
  if (exchange.id) {
    Object.assign(obj, { id: exchange.id });
  }
  return obj;
  }
}
