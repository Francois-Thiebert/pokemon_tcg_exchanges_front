import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectToJsonService } from './object-to-json.service';
import { Observable } from 'rxjs';
import { Exchange } from '../model/exchange';
import { exchangeRest } from '../env';
import { Card } from '../model/card';
import { Cause } from '../model/cause';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  constructor(private http: HttpClient, private convert: ObjectToJsonService) { }

      public allExchange(): Observable<Exchange[]> {
        return this.http.get<Exchange[]>(`${exchangeRest}/adm/all`);
      }

      public getById(id: number): Observable<Exchange> {
        return this.http.get<Exchange>(`${exchangeRest}/${id}`);
      }
      public exchangeNumberCurrent(): Observable<number>{
          return this.http.get<number>(`${exchangeRest}/adm/numberCurrent`);
      }
      public exchangeNumberFinished(): Observable<number>{
        return this.http.get<number>(`${exchangeRest}/adm/numberFinished`);
      }

      public getNew(id: number): Observable<Exchange[]> {
        return this.http.get<Exchange[]>(`${exchangeRest}/new/${id}`);
      }

      public getByUserId(id: number): Observable<Exchange[]> {
        return this.http.get<Exchange[]>(`${exchangeRest}/user/${id}`);
      }

      public delete(id: number): Observable<void> {
        return this.http.delete<void>(`${exchangeRest}/${id}`);
      }

      public cancel(exchange: Exchange, userId: number, cause: Cause): Observable<Exchange> {
        return this.http.put<Exchange>(
          `${exchangeRest}/cancel/${exchange.id}/${userId}/${cause}`,
          this.convert.exchangeToJson(exchange)
        );
      }

      public update(exchange: Exchange): Observable<Exchange> {
        return this.http.put<Exchange>(
          `${exchangeRest}/${exchange.id}`,
          this.convert.exchangeToJson(exchange)
        );
      }

      public create(exchange: Exchange): Observable<Exchange> {
        return this.http.post<Exchange>(
          exchangeRest,
          this.convert.exchangeToJson(exchange)
        );
      }

      public getCollectionImgByCard(card: Card){
        if (card.collection === 0) {
          card.collection_img = "assets/images/puissance-genetique.png";
        } else if (card.collection === 1) {
          card.collection_img = "assets/images/ile-fabuleuse.png";
        } else if (card.collection === 2) {
          card.collection_img = "assets/images/choc-spatio-temporel.png";
        } else if (card.collection === 3) {
          card.collection_img = "assets/images/lumiere-triomphale.png";
        }else {
          card.collection_img = undefined;
        }
      }

      getCollectionImgByExchange(exchange: Exchange){
          this.getCollectionImgByCard(exchange.card1!);
          this.getCollectionImgByCard(exchange.card2!);
      }
}
