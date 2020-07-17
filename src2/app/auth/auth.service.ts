import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class AuthService {
constructor(private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('tokenstore');
  }

//   public isAuthenticated(): boolean {
//     // get the token
//     const token = this.getToken();
//     // return a boolean indicating whether or not the token is expired
//     return tokenNotExpired(token);
//   }

}