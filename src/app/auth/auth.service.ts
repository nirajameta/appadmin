import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class AuthService {
constructor(private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('tokenstore');
  }

}