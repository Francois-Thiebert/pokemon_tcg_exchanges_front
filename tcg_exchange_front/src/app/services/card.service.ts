import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectToJsonService } from './object-to-json.service';
import { Observable } from 'rxjs';
import { Card } from '../model/card';
import { cardRest } from '../env';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient, private convert: ObjectToJsonService) { }

    public allCard(): Observable<Card[]> {
      return this.http.get<Card[]>(cardRest);
    }

    public getById(id: number): Observable<Card> {
      return this.http.get<Card>(`${cardRest}/all/${id}`);
    }

    public delete(id: number): Observable<void> {
      return this.http.delete<void>(`${cardRest}/${id}`);
    }

    public update(card: Card): Observable<Card> {
      return this.http.put<Card>(
        `${cardRest}/${card.id}`,
        this.convert.cardToJson(card)
      );
    }

    public create(card: Card): Observable<Card> {
      return this.http.post<Card>(
        cardRest,
        this.convert.cardToJson(card)
      );
    }
}
