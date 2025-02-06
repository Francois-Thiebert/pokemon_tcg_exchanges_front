import { Card } from "./card";
import { User } from "./user";

export class Exchange {
  public get date(): Date | undefined {
    return this._date;
  }
  public set date(value: Date | undefined) {
    this._date = value;
  }
  public get user2(): User | undefined {
    return this._user2;
  }
  public set user2(value: User | undefined) {
    this._user2 = value;
  }
  public get user1(): User | undefined {
    return this._user1;
  }
  public set user1(value: User | undefined) {
    this._user1 = value;
  }
  public get card2(): Card | undefined {
    return this._card2;
  }
  public set card2(value: Card | undefined) {
    this._card2 = value;
  }
  public get card1(): Card | undefined {
    return this._card1;
  }
  public set card1(value: Card | undefined) {
    this._card1 = value;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  public constructor(
      private _id?: number,
      private _card1?: Card,
      private _card2?: Card,
      private _user1?: User,
      private _user2?: User,
      private _date?: Date,
  ){}
}
