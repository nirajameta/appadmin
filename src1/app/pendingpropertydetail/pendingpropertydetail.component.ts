import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { DataService } from '../data.service';
import sampleData from '../data.json';
import {Router} from '@angular/router';

import '../../assets/js/jssor.slider-27.5.0.min.js';
// declare var jssor_1_slider_init:any;



@Component({
  selector: 'app-propertydetail',
  templateUrl: './pendingpropertydetail.component.html',
  styleUrls: ['./pendingpropertydetail.component.scss']
})
export class PropertydetailComponent implements OnInit {
 public value: {};
 Users: any = sampleData;
 wings:any;

  constructor(private route: ActivatedRoute, public dataservice:DataService, private router: Router) { }

  ngOnInit() {

    // new jssor_1_slider_init()
    console.log(this.dataservice.user)
    this.value = this.dataservice.user

    console.log(this.Users.employees);

    this.wings = this.Users.employees


  }

  evaluteproperty(wingsdata){
    this.dataservice.user = wingsdata;

    //this.router.navigateByUrl('./detail', { state: { hello: 'world' } });
    
     this.router.navigate(['./evaluteproperty']);
  }

  

}
