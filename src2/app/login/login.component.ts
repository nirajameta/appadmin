import { Component, OnInit } from '@angular/core';

import '../../assets/js/bootstrap-show-password.js';
import { Router} from '@angular/router';
import{ApiService} from '../api.service';
import {HttpErrorResponse} from '@angular/common/http';




declare var $: any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any = {};
  dashboardchange : boolean;
  public edited = false;
  arrayvalue;
  constructor(private router: Router, public apiService:ApiService) { }

  ngOnInit() {
    this.dashboardchange = false;
  }
  // gotodashboard(){
  //   if(this.dashboardchange){
  //     this.router.navigate(['/dashboard']); 
  //   }
  //   else{
  //     this.router.navigate(['/admindashboard']); 
  //   }
   
  // }

  onSubmit() {
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.login, null, 4));
    this.apiService.login(this.login).subscribe((res)=>{
      console.log(res["status"]);

     



      if(res["status"] == 1){
        localStorage.setItem("tokenstore",res["token"])
        localStorage.setItem("usertype",res["user_type"])

        if(res["user_type"] == "expert"){
          this.router.navigate(['/dashboard']); 
        }
        else{
          this.router.navigate(['/admindashboard']); 
        }
        

        
      }
      else{
        this.arrayvalue = "Either Your UserName or Password is Incorrect";
        this.edited = true;

        setTimeout(function() {
          this.edited = false;
          console.log(this.edited);
        }.bind(this), 5000);
      }
      



      // if(res["userType"] == "expert"){
      //   this.router.navigate(['/dashboard']); 
      // }
      // if(res["userType"] == "Admin"){
      //   this.router.navigate(['/admindashboard']); 
      // }
     

    },(err:HttpErrorResponse) => {
      console.log(err)

     

      
   })


  }

}
