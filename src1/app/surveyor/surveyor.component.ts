import { Component, OnInit } from '@angular/core';
import datatable from '../data.json';
import {Router} from '@angular/router';


@Component({
  selector: 'app-surveyor',
  templateUrl: './surveyor.component.html',
  styleUrls: ['./surveyor.component.scss']
})
export class SurveyorComponent implements OnInit {

  Users: any = datatable;
  table:any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.table = this.Users.Surveyor;
    console.log(this.table)
  }

  editCar(data){
    // alert("Entering")
    this.router.navigate(['./allproperty']);
   
  }
  deleteCar(data){
    // alert("list")
  }

}
