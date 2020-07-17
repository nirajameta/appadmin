import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ApiService} from '../api.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';  


@Component({
  selector: 'app-addexpert',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AddexpertComponent implements OnInit {

  @ViewChild('f',{static:false}) formValues;

  constructor(private http: HttpClient, public apiService:ApiService, private router: Router, private route: ActivatedRoute) { }
  model: any = {};
  url = '';
  fileToUpload: File = null;
  successmsg:any;
  showMsg: boolean = false;

  mySubscription: any;
  displaymessage:boolean = true;
  userID:string;
  public edited = false;
  emailexistmsg:string;
  public sub: any;
  useradd_type:any

 

 


  ngOnInit() {
    this.model.gender = ""; 

    this.sub = this.route.params.subscribe(params => {
      this.useradd_type = params['id'];
      console.log(this.useradd_type);
      });
    
   
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


  SubmitExpert(model){
    

    var payload = 
    {
      "username" : model.username,
      "password" : model.password,
      "firstName" : model.firstName,
      "lastName" : model.lastName,
      "user_type": this.useradd_type,
      "email" : model.email,
      "contact" : model.contact,
      "gender" : model.gender,
      "dob" : model.dob,
    }
    console.log(payload);
    
    this.apiService.createUser(this.fileToUpload,payload).subscribe(response => {
      console.log('response received is ', response);
      if(response["status"] == 0){
        
        this.edited = true;
        this.emailexistmsg = response["msg"]
        setTimeout(function() {
          this.edited = false;
          console.log(this.edited);
      }.bind(this), 5000);
      }

      if(response["status"] == 1){
         this.userID = response["UserID"]
        this.url = null;
        this.formValues.resetForm();
        this.displaymessage = false
      }

    
      }, error => {
        console.log(error);
      });
   }

   addanothersurveyor(){
    this.displaymessage = true;
   }

}
