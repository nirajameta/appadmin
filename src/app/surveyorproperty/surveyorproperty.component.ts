import { Component, OnInit, ViewChildren } from '@angular/core';
import datatable from '../data.json';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from '../data.service';
import{ApiService} from '../api.service';
import {Router} from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';










@Component({
  selector: 'app-allproperty',
  templateUrl: './surveyorproperty.component.html',
  styleUrls: ['./surveyorproperty.component.scss']
})
export class AllpropertyComponent implements OnInit {
  @ViewChildren('myVar') createdItems;

  order: string = 'propertyid';
  reverse: boolean = false;
  items: Array<any>;  
  Users: any = datatable;
  table:any;
  total:any;
  sortedCollection: any[];
  p: number = 1;
  filter:any;
  config: any;
  current:any;
  collection = { count: 10, data: [] };

  constructor(private orderPipe: OrderPipe, public dataservice:DataService, public apiService:ApiService,private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {

    console.log(this.dataservice.user)

    this.table = this.dataservice.user;
    console.log(this.table);
    this.sortedCollection = this.orderPipe.transform(this.table, 'project');
    console.log(this.sortedCollection);

      
  }

  datas(filter) {
    this.table = this.dataservice.user;
    console.log(this.table.length);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  deletedata(policy){
    this.spinnerService.show();
    console.log(policy.propCode);
    this.apiService.deleteproperty(policy.propCode).subscribe((deleted)=>{
      console.log(deleted);
      this.spinnerService.hide();
      this.router.navigate(['./surveyor'], {skipLocationChange: true});
     })
   }


}
