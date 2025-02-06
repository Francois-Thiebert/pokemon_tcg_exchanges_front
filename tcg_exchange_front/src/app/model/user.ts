import { Card } from "./card";
import { Role } from "./role";

export class User {
  public get toGiveList(): Card[] | undefined {
    return this._toGiveList;
  }
  public set toGiveList(value: Card[] | undefined ) {
    this._toGiveList = value;
  }
  public get wishList(): Card[]  | undefined{
    return this._wishList;
  }
  public set wishList(value: Card[] | undefined) {
    this._wishList = value;
  }
  public get friendCode(): String | undefined {
    return this._friendCode;
  }
  public set friendCode(value: String | undefined ) {
    this._friendCode = value;
  }
  public get role(): Role | undefined {
    return this._role;
  }
  public set role(value: Role | undefined) {
    this._role = value;
  }
  public get password(): String | undefined {
    return this._password;
  }
  public set password(value: String | undefined) {
    this._password = value;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  public get login(): String | undefined {
    return this._login;
  }
  public set login(value: String | undefined ) {
    this._login = value;
  }
  public constructor(
    private _id?: number,
    private _login?: String,
    private _password?: String,
    private _role?: Role,
    private _friendCode?: String,
    private _wishList?: Card[],
    private _toGiveList?: Card[],
){}
}
