import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import {Router} from '@angular/router';
import{ApiService} from '../api.service';
import {HttpErrorResponse} from '@angular/common/http';



@Component({
  selector: 'app-completedproperty',
  templateUrl: './completedproperty.component.html',
  styleUrls: ['./completedproperty.component.scss']
})
export class CompletedpropertyComponent implements OnInit {

  order: string = 'propertyid';
  filter:any;
  reverse: boolean = false;
  table:any= []
  sortedCollection: any[];
  p: number = 1;
  total:any;
  config: any;
  collection = { count: 10, data: [] };
  proptype:any;

  constructor(private orderPipe: OrderPipe, private router: Router, public apiService:ApiService) {
    // this.table = [
    //   { propertyid: 1,project:'sun',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Residential", Units:34, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 2,project:'Mehul Test',surveyor:'Rohit Shetty',builder:"Rahul", projecttype:"Residential", Units:35, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 3,project:'SNMP',surveyor:'Rohit Patil1', builder:"Rahul", projecttype:"Residential", Units:36, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 4,project:'GSTC',surveyor:'pk Patil', builder:"Mukesh", projecttype:"Residential", Units:37, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 5,project:'sun1',surveyor:'cl Patil', builder:"Mukesh", projecttype:"Residential", Units:38, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 6,project:'sun2',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Residential", Units:34, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 7,project:'sun3',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Residential", Units:34, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 8,project:'sun4',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Residential", Units:34, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 9,project:'sun5',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Residential", Units:34, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 10,project:'sun',surveyor:'Rohit Patil', builder:"Mukesh",  Units:34, floors:4, Added_date:"Dec 1993" },
    // ]
    // this.sortedCollection = orderPipe.transform(this.table, 'project');
    // console.log(this.sortedCollection);
   }

  ngOnInit() {
    this.proptype = "";

    this.apiService.completedpropertylist().subscribe((res)=>{
      console.log(res);
      
      console.log(res["data"]);
      // this.table = res["data"]

      console.log(this.table.length);

      this.sortedCollection = this.orderPipe.transform(this.table, 'project');
      console.log(this.sortedCollection);

    },
    (err:HttpErrorResponse) => {
      console.log(err)
   })
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
