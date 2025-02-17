import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectToJsonService } from './object-to-json.service';
import { Observable } from 'rxjs';
import { Exchange } from '../model/exchange';
import { exchangeRest } from '../env';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  constructor(private http: HttpClient, private convert: ObjectToJsonService) { }

      public allExchange(): Observable<Exchange[]> {
        return this.http.get<Exchange[]>(exchangeRest);
      }

      public getById(id: number): Observable<Exchange> {
        return this.http.get<Exchange>(`${exchangeRest}/${id}`);
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
}
