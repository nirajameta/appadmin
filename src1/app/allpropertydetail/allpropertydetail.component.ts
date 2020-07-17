import { Component, OnInit } from '@angular/core';
import sampleData from '../data.json';

@Component({
  selector: 'app-allpropertydetail',
  templateUrl: './allpropertydetail.component.html',
  styleUrls: ['./allpropertydetail.component.scss']
})
export class AllpropertydetailComponent implements OnInit {
  Users: any = sampleData;
  wings:any;

  constructor() { }

  ngOnInit() {


    console.log(this.Users.employees);

    this.wings = this.Users.employees
  }

}
