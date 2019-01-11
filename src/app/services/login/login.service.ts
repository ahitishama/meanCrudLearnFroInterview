import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface TokenResponse {
  token: string;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`http://localhost:8080/login/authenticate`, { email: username, password: password })
      .pipe(map((data: TokenResponse) => {
          // login successful if there's a jwt token in the response
          // if (data && data.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              // localStorage.setItem('currentUser', JSON.stringify(data.user));
          // }
          return data;
      }));
  }
}
