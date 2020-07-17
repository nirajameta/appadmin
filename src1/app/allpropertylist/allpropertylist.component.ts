import { Component, OnInit } from '@angular/core';
import datatable from '../data.json';


@Component({
  selector: 'app-allpropertylist',
  templateUrl: './allpropertylist.component.html',
  styleUrls: ['./allpropertylist.component.scss']
})
export class AllpropertylistComponent implements OnInit {

  Users: any = datatable;
  table:any

  constructor() { }

  ngOnInit() {
    this.table = this.Users.Allpropertylist;
    console.log(this.table);
  }

}
