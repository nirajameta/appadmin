import { Component, OnInit } from '@angular/core';
import datatable from '../data.json';
import { OrderPipe } from 'ngx-order-pipe';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
import{ApiService} from '../api.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-newproperty',
  templateUrl: './newproperty.component.html',
  styleUrls: ['./newproperty.component.scss']
})
export class NewpropertyComponent implements OnInit {

  order: string = 'propertyid';

  reverse: boolean = false;
  table:any= []
  table1:any
  table2:any
  sortedCollection: any[];
  p: number = 1;
  total;any;  
  filter:any;
  datapolicy:any;
  clearFilter:any
  config: any;
  collection = { count: 10, data: [] };
  proptype:any;
  isAscendic = true
  constructor(private orderPipe: OrderPipe, private router: Router, public dataservice:DataService, public apiService:ApiService) { }

  ngOnInit() {
    console.log(this.table);
    this.proptype = "proptype"
    this.apiService.getnewsupporterproperty().subscribe((propertydata)=>{
       this.table  = propertydata["data"]

       this.sortedCollection = this.orderPipe.transform(this.table, 'project');
       console.log(this.sortedCollection);

  })
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  propertydetail(policy:object){
    console.log(policy);
    // this.dataservice.user = policy["propCode"];
    this.router.navigate(['./newpropertydetail',policy["propCode"]]);

  }

}
