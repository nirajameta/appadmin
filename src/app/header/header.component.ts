import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import{ApiService} from '../api.service';
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  url:any;
  baseurl = environment.baseUrl;
  firstname:string;
  profiledata:any;


  constructor(private router : Router, public apiService:ApiService, public location:Location) {

   }

  ngOnInit() { 

    if(window.location.pathname == "/admindashboard" || window.location.pathname == "/dashboard" || window.location.pathname == "/newproperty"){
      setTimeout(() => {
        this.profiledata = JSON.parse(localStorage.getItem("profiledata")) 
      
        console.log(this.profiledata)
        this.firstname = this.profiledata["firstName"];
        if(this.profiledata.profile_pic === "undefined" || this.profiledata.profile_pic == null ){
              this.url = null
              console.log(this.url);
            }
      
            else{
              this.url = this.baseurl + this.profiledata.profile_pic
            }
  
        
      },800);
    }
    else{
     
        this.profiledata = JSON.parse(localStorage.getItem("profiledata")) 
      
        console.log(this.profiledata)
        this.firstname = this.profiledata["firstName"];
        if(this.profiledata.profile_pic === "undefined" || this.profiledata.profile_pic == null ){
              this.url = null
              console.log(this.url);
            }
      
            else{
              this.url = this.baseurl + this.profiledata.profile_pic
            }
  
        
    
    }


  }
  logout(){
    localStorage.removeItem("profiledata")
    localStorage.removeItem('tokenstore');
    this.router.navigate(['login']);
  }
  

}
