import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Hotel} from '../data-models/hotel';
import { Observable } from 'rxjs';
import {base_url} from '../configs/general-config';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HotelService{

  hotelUrl=base_url.apiEndpoint;
  constructor(private http:HttpClient) {}

  public getHotels():Observable<Hotel[]> {
    console.log(this.http.get<Hotel[]>(this.hotelUrl));
    return this.http.get<Hotel[]>(this.hotelUrl);
  }


}