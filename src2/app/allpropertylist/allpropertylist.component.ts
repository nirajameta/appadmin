import { Component, OnInit } from '@angular/core';
import datatable from '../data.json';
import {HttpErrorResponse} from '@angular/common/http';
import{ApiService} from '../api.service';
import { OrderPipe } from 'ngx-order-pipe';





@Component({
  selector: 'app-allpropertylist',
  templateUrl: './allpropertylist.component.html',
  styleUrls: ['./allpropertylist.component.scss']
})
export class AllpropertylistComponent implements OnInit {

  order: string = 'propertyid';

  reverse: boolean = false;
  table:any= []
  sortedCollection: any[];
  p: number = 1;
  total;any;  
  config: any;
  collection = { count: 10, data: [] };
  Users: any = datatable;
 
  filter:any;
  isAscendic = true
  proptype:any;


  constructor(private orderPipe: OrderPipe,public apiService:ApiService) { }

  ngOnInit() {
    this.proptype = "";

    this.apiService.allpropertylist().subscribe((res)=>{
      console.log(res);
      
      console.log(res["data"]);
       this.table = res["data"]

      this.sortedCollection = this.orderPipe.transform(this.table, 'project');
      console.log(this.sortedCollection);

    },
    (err:HttpErrorResponse) => {
      console.log(err)
   })


      // this.sortedCollection = this.orderPipe.transform(this.table, 'project');
      // console.log(this.sortedCollection); 

   // this.table = this.Users.Allpropertylist;
    console.log(this.table);


  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  clearFilter(proptype){
    console.log(proptype);
    this.setOrder('projecttype') 

   // this.ascendicprice();
  }

}
