import { Component, OnInit } from '@angular/core';
import datatable from '../data.json';
import { OrderPipe } from 'ngx-order-pipe';




@Component({
  selector: 'app-allproperty',
  templateUrl: './surveyorproperty.component.html',
  styleUrls: ['./surveyorproperty.component.scss']
})
export class AllpropertyComponent implements OnInit {
  order: string = 'propertyid';
  reverse: boolean = false;
  items: Array<any>;  
  Users: any = datatable;
  table:any;
  sortedCollection: any[];
  p: number = 1;
  daysInAWeek: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']; 

  toggle = {};

  config: any;
  collection = { count: 10, data: [] };

  constructor(private orderPipe: OrderPipe) { }

  ngOnInit() {

    this.table = this.Users.table;
    console.log(this.table);
    this.sortedCollection = this.orderPipe.transform(this.table, 'project');
    console.log(this.sortedCollection);

    
    this.items =    [
      {
          "title": "What is Lorem Ipsum?",
          "description": "Lorem Ipsum is ....."
      },
      {
          "title": "Why do we use it?",
          "description": "It is a long established fact that a reader...."
      }   
  ]       
  }


  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  displayoption(){
    alert("ready");
  }

}
