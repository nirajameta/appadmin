import { Component, OnInit } from '@angular/core';
import datatable from '../data.json';


@Component({
  selector: 'app-newproperty',
  templateUrl: './newproperty.component.html',
  styleUrls: ['./newproperty.component.scss']
})
export class NewpropertyComponent implements OnInit {

  Users: any = datatable;
  table:any;items:any;
  constructor() { }

  ngOnInit() {
    this.table = this.Users.Allpropertylist;
    console.log(this.table);
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

}
