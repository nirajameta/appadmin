import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ApiService} from '../api.service';
import { NgForm }   from '@angular/forms';
import {Router} from '@angular/router';




@Component({
  selector: 'app-addsurveyor',
  templateUrl: './addsurveyor.component.html',
  styleUrls: ['./addsurveyor.component.scss']
})
export class AddsurveyorComponent implements OnInit {
  @ViewChild('f',{static:false}) formValues;

  constructor(private http: HttpClient, public apiService:ApiService, private router: Router) { }
  model: any = {};
  url = '';
  fileToUpload: File = null;
  successmsg:any;
  showMsg: boolean = false;

  mySubscription: any;


 


  ngOnInit() {
    this.model.gender = ""; 
    
   
  }

  onSelectFile(files: FileList) {
    if (files && files[0]) {
      var reader = new FileReader();


       this.fileToUpload = files[0];

      reader.readAsDataURL(files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(this.url);
      }
    }
  }


  SubmitSurveyor(model){
    

    var payload = 
    {
      "username" : model.username,
      "password" : model.password,
      "firstName" : model.firstName,
      "lastName" : model.lastName,
      "email" : model.email,
      "contact" : model.contact,
      "gender" : model.gender,
      "dob" : model.dob,
    }

// this.router.routeReuseStrategy.shouldReuseRoute = function () {
//   return false;
// };




   
  
    this.apiService.createsurveyor(this.fileToUpload,payload).subscribe(response => {
      console.log('response received is ', response);
      if(response["status"] == 1){
        this.showMsg= true;
        this.successmsg = response["msg"]
        setTimeout(function() {
          this.showMsg = false;
          console.log(this.edited);
        }.bind(this), 4000);
    
       
        this.formValues.resetForm();
        this.fileToUpload = null;
     
      }

    
      }, error => {
        console.log(error);
      });
   }


   
   
    
  }
 
