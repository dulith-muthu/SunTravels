import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest } from '@angular/common/http';
import {Hotel} from '../data-models/hotel';
import {BooleanResponse} from '../data-models/booleanResponse';
import {Observable, of} from 'rxjs';
import {base_url} from '../configs/general-config';
import {catchError} from "rxjs/internal/operators";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HotelService{

  hotelUrl=base_url.hotelApiEndpoint;
  deleteHotelUrl=base_url.deleteHotelApiEndPoint;
  addHotelUrl=base_url.addHotelApiEndPoint;
  getHotelByIdUrl=base_url.getHotelByIdApiEndPoint;


  constructor(private http:HttpClient) {}

  public getHotels():Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelUrl).pipe(
      catchError(this.handleError<Hotel[]>('getHeroes', [])));
  }

  public deleteHotelById(id:number):Observable<BooleanResponse>{
    return this.http.get<BooleanResponse>(this.deleteHotelUrl+'/'+id).pipe(
      catchError(this.handleError<BooleanResponse>('deleteHotel')));
  }

  public addHotel(hotel:Hotel):Observable<Hotel>{
    return this.http.post<Hotel>(this.addHotelUrl,hotel,httpOptions).
    pipe(catchError(this.handleError('addHotel',hotel)));
  }

  public getHotelById(id:number):Observable<Hotel>{
    return this.http.get<Hotel>(this.getHotelByIdUrl+'/'+id).
    pipe(catchError(this.handleError<Hotel>('getHotelById')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
