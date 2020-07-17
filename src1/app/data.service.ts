import { Injectable } from '@angular/core';
import { array } from '@amcharts/amcharts4/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public username:object;
  public createarray: any;
  constructor() { }

  set user(val: object){
    this.username = val;
  }
  get user():object{
    return this.username;
  }

  set arraydata(val){
    this.createarray = val;
  }
  get arraydata():any{
    return this.username;
  }
}
