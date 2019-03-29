import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import { base_url } from '../configs/general-config';
import { throwError } from 'rxjs';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(base_url.authApiEndpoint, { userName: username, password: password }, { observe: 'response' })
      .pipe(map(
        response => {
          // login successful if there's a jwt token in the response
          // in our cas we dont have tokens, just 202 - ACCEPTED response
          if (response && response.status === 202) {
            // store user detail  and jwt token in local storage to keep user logged in between page refreshes
            // Here We just save the username
            localStorage.setItem('currentUser', JSON.stringify(username));
            return true;
          }
          return false;
        }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
