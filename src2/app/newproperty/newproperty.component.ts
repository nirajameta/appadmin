import { Component, OnInit } from '@angular/core';
import datatable from '../data.json';


@Component({
  selector: 'app-newproperty',
  templateUrl: './newproperty.component.html',
  styleUrls: ['./newproperty.component.scss']
})
export class NewpropertyComponent implements OnInit {

  Users: any = datatable;
  table:any;
  filter:any;
  policy:any;datapolicy:any
  constructor() { }

  ngOnInit() {
    this.table = this.Users.Allpropertylist;
    console.log(this.table);
  }

}
