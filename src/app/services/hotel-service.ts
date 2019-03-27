import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Hotel} from '../data-models/hotel';
import {Observable, of} from 'rxjs';
import {base_url} from '../configs/general-config';
import {catchError} from "rxjs/internal/operators";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HotelService{

  hotelUrl=base_url.hotelApiEndpoint;
  constructor(private http:HttpClient) {}

  public getHotels():Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelUrl).pipe(
      catchError(this.handleError<Hotel[]>('getHeroes', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
