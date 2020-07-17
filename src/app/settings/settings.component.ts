import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';







@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  getuserid: any;
  profileobject:any = {};
  url:any;
  fileToUpload: File = null;
  baseurl = environment.baseUrl;
  Uploadfiles:any;
  File:any;
  successmsg:string;
  msgdisplay:boolean = false;

  constructor(public apiService:ApiService, private location: Location) { }

  ngOnInit() {
    this.getuserid = localStorage.getItem("userID")
    console.log(this.getuserid)
    this.apiService.getprofile(this.getuserid).subscribe(response => {
      console.log(response[0])
    

      if(response[0]["profile_pic"] === "undefined" || response[0]["profile_pic"] == null ){
        this.url = null
        console.log(this.url);
      }

      else{
        this.url = this.baseurl + response[0]["profile_pic"]
      }

     

      this.profileobject =
      {
        "firstName":response[0]["firstName"].replace(/\b[a-z]/g, (x) => x.toUpperCase()),
        "lastName": response[0]["lastName"].replace(/\b[a-z]/g, (x) => x.toUpperCase()),
        "dob":response[0]["dob"],
        "email":response[0]["email"],
        "gender":response[0]["gender"],
        "contact":response[0]["contact"],
        "password":response[0]["password"],
        "url": response[0]["profile_pic"]
       
      }

      console.log(this.profileobject);
      

    })
  }


  onSelectFile(files: FileList) {
    if (files && files[0]) {
      var reader = new FileReader();


       this.fileToUpload = files[0];
       console.log(this.fileToUpload);

      reader.readAsDataURL(files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(this.url);
      }
    }
  }

  deletepic(){
    
    this.url = null;
    
  }


  updatedata(profileobject){

   if(this.url == null) {

      var payload = 
      {
        "password" : profileobject.password,
        "firstName" : profileobject.firstName,
        "lastName" : profileobject.lastName,
        "email" : profileobject.email,
        "contact" : profileobject.contact,
        "gender":profileobject.gender,
        "user_type":localStorage.getItem("usertype"),
        "url":null
        
      }
    

    }
    else{
      var payload = 
      {
        "password" : profileobject.password,
        "firstName" : profileobject.firstName,
        "lastName" : profileobject.lastName,
        "email" : profileobject.email,
        "contact" : profileobject.contact,
        "gender":profileobject.gender,
        "user_type":localStorage.getItem("usertype"),
        "url":this.profileobject.url
        
      }
    }

 




    
   
    console.log(payload);

    this.apiService.updateuser(this.fileToUpload,payload).subscribe(response => {
      console.log(response);

      this.apiService.getprofile(localStorage.getItem("userID")).subscribe(responseprofile => {
        console.log(responseprofile[0])
        localStorage.setItem("profiledata",JSON.stringify(responseprofile[0]))

         

        
       })

      this.msgdisplay = true;
      this.successmsg = "Profile has been Updated Successufully"

        

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
   
  
 
   }


}
