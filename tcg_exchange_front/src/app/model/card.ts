import { Type } from "./type";
import { User } from "./user";

export class Card {
  public get collection_img(): String | undefined {
    return this._collection_img;
  }
  public set collection_img(value: String | undefined) {
    this._collection_img = value;
  }
  public get rarity_string(): String | undefined {
    return this._rarity_string;
  }
  public set rarity_string(value: String | undefined) {
    this._rarity_string = value;
  }
  public get collection(): number | undefined {
    return this._collection;
  }
  public set collection(value: number | undefined) {
    this._collection = value;
    if (value === 0) {
      this._collection_img = "assets/images/puissance-genetique.png";
    } else if (value === 1) {
      this._collection_img = "assets/images/ile-fabulseuse.png";
    } else if (value === 2) {
      this._collection_img = "assets/images/choc-spatio-temporel.png";
    } else if (value === 3) {
      this._collection_img = "assets/images/lumiere-triomphale.png";
    }else {
      this._collection_img = undefined;
    }
  }
  public get type(): Type | undefined {
    return this._type;
  }
  public set type(value: Type | undefined) {
    this._type = value;
  }
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
        private _rarity_string?: String,
        private _type?: Type,
        private _serialNumber?: String,
        private _collection?: number,
        private _collection_img?: String,
        private _picture?: String,
        private _wisher?: User[],
        private _giver?: User[],
    ){}
}
