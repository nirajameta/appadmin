import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
import{ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-appropendingproperty',
  templateUrl: './appropendingproperty.component.html',
  styleUrls: ['./appropendingproperty.component.scss']
})
export class AppropendingpropertyComponent implements OnInit {
  order: string = 'propertyid';

  reverse: boolean = false;
  table:any= []
  table1:any
  table2:any
  sortedCollection: any[];
  p: number = 1;
  total;any;  
  filter:any;
  config: any;
  collection = { count: 10, data: [] };
  proptype:any;
  isAscendic = true;
  public sub: any;
  propertylist_type:any
  constructor(private orderPipe: OrderPipe, private router: Router, public dataservice:DataService, public apiService:ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.proptype = "proptype"
  

    this.route.params.subscribe(routeParams => {
      this.loadUserDetail(routeParams.id);
    });
  }


  loadUserDetail(propertylist_type){
    console.log(propertylist_type);
       this.apiService.propertyapprovepending(propertylist_type).subscribe((propertydata)=>{
        console.log(propertydata);
       this.table  = propertydata["data"]
       this.sortedCollection = this.orderPipe.transform(this.table, 'project');
       console.log(this.sortedCollection);

  })
  }


}
