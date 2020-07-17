import { Component, OnInit } from '@angular/core';

import '../../assets/js/bootstrap-show-password.js';
import { Router} from '@angular/router';


declare var $: any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  dashboardchange : boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.dashboardchange = false;
  }
  gotodashboard(){
    if(this.dashboardchange){
      this.router.navigate(['/dashboard']); 
    }
    else{
      this.router.navigate(['/admindashboard']); 
    }
   
  }

}
