import { Cause } from "./cause";
import { Exchange } from "./exchange";

export class CanceldExchange {
  public get cause(): Cause | undefined {
    return this._cause;
  }
  public set cause(value: Cause | undefined) {
    this._cause = value;
  }
  public get exchange(): Exchange | undefined {
    return this._exchange;
  }
  public set exchange(value: Exchange | undefined) {
    this._exchange = value;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }

  public constructor(
        private _id?: number,
        private _exchange?: Exchange,
        private _cause?: Cause,
    ){}
}
