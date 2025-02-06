import { User } from "./user";

export class Card {
  public get giver(): User[] | undefined {
    return this._giver;
  }
  public set giver(value: User[] | undefined) {
    this._giver = value;
  }
  public get wisher(): User[] | undefined {
    return this._wisher;
  }
  public set wisher(value: User[] | undefined) {
    this._wisher = value;
  }
  public get picture(): String | undefined {
    return this._picture;
  }
  public set picture(value: String | undefined) {
    this._picture = value;
  }
  public get serialNumber(): String | undefined {
    return this._serialNumber;
  }
  public set serialNumber(value: String | undefined) {
    this._serialNumber = value;
  }
  public get rarity(): number | undefined {
    return this._rarity;
  }
  public set rarity(value: number | undefined) {
    this._rarity = value;
  }
  public get name(): String | undefined {
    return this._name;
  }
  public set name(value: String | undefined) {
    this._name = value;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  public constructor(
        private _id?: number,
        private _name?: String,
        private _rarity?: number,
        private _serialNumber?: String,
        private _picture?: String,
        private _wisher?: User[],
        private _giver?: User[],
    ){}
}
