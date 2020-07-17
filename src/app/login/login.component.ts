import { Component, OnInit } from '@angular/core';

import '../../assets/js/bootstrap-show-password.js';
import { Router} from '@angular/router';
import{ApiService} from '../api.service';
import {HttpErrorResponse} from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../auth/auth.service.js';






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
  userclick:boolean
  resetpsw:string = '';
  displaymsg:string;
  constructor(private router: Router, public apiService:ApiService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.dashboardchange = false;
    this.userclick = true;
  }


  onSubmit() {
    
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.login, null, 4));
    this.apiService.login(this.login).subscribe((res)=>{
      console.log(res["status"]);

     
      


      if(res["status"] == 1 && res["user_type"] !== "webuser") {
        localStorage.setItem("tokenstore",res["token"])
        localStorage.setItem("usertype",res["user_type"])
        localStorage.setItem("userID",res["userID"])

       
        setTimeout(() => {
          this.apiService.getprofile(localStorage.getItem("userID")).subscribe(responseprofile => {
            console.log(responseprofile[0])
            localStorage.setItem("profiledata",JSON.stringify(responseprofile[0]))
  
            
  
  
  
            
           })
        }, 400);  


        if(res["user_type"] == "expert"){
          this.router.navigate(['/dashboard']); 
        }
        else if(res["user_type"] == "admin"){
          this.router.navigate(['/admindashboard']); 
        }
        else if(res["user_type"] == "supporter"){
          this.router.navigate(['/newproperty']); 
        }
        else{
          this.arrayvalue = "Either Your UserName or Password is Incorrect";
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

  resetpswlink(){
    this.userclick = false;
  }

  gobacktologin(){
    this.userclick = true;
  }
  onSubmitresetpsw(){
    this.spinnerService.show();

    var payload = {
      "email": this.resetpsw
    }

    console.log(payload);
    this.apiService.updatepsw(payload).subscribe((updatepsw)=>{

      console.log(updatepsw["msg"])
      this.spinnerService.hide();
      
      this.edited = true;
      this.displaymsg = updatepsw["msg"];
      setTimeout(function() {
        this.edited = false;
        console.log(this.edited);
      }.bind(this), 5000);


    })

  }

}
