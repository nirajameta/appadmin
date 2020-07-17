import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import sampleData from '../data.json';
import {Router} from '@angular/router';
// import 'jquery-ui-dist/jquery-ui';
import{ApiService} from '../api.service';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-newpropertydetails',
  templateUrl: './newpropertydetails.component.html',
  styleUrls: ['./newpropertydetails.component.scss']
})
export class NewpropertydetailsComponent implements OnInit {
public propID:any;
 Users: any = sampleData;
 wings:any;
 wingdata:any;
 table2:any;
 selectedIndex;
 propertyimg:any;
 dataintable: any;
 arrayforpropertyImage:any;
 Imagevalue:any;
 valueofi:any;
 selectedItem:any;
 displayarray:any;
 propertyamenities:any;
 amenitieslist:any;
 passidvalue:any;
 staticimgUrl = environment.baseUrl;
 propertypendingid: number;
 public sub: any;
 propertyname:string;
 field:any={}
 option:boolean = false;
 msgdisplay:string;

 
 slideIndex:number = 1;

  constructor(private route: ActivatedRoute,private router: Router, public apiService:ApiService, location: Location, public spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    
    this.sub = this.route.params.subscribe(params => {
    this.propertypendingid = +params['id']; // (+) converts string 'id' to a number
    });

    
 
   console.log(this.propertypendingid);
    // sessionStorage.setItem("propid", this.propID)

   
    // console.log(sessionStorage.getItem("propid")); 

    
    

    this.apiService.newpropertylistdetail(this.propertypendingid).subscribe((pendingpropertydata)=>{
      
    
     // this.dataservice.user = pendingpropertydata["propertyData"][0]
        this.displayarray = pendingpropertydata["propertyData"][0].wings[0]["units"];
        this.propertyname = pendingpropertydata["propertyData"][0].project_name
        console.log(this.propertyname)
       this.propertyimg = pendingpropertydata["propertyImages"][0]

      

       this.arrayforpropertyImage= []

       for (var value in this.propertyimg) {
        if (this.propertyimg.hasOwnProperty(value)) {
           
            if(this.propertyimg[value] !== "undefined"){
              this.arrayforpropertyImage.push(this.propertyimg[value]);
              
            }
            
        }
    }
    console.log(this.arrayforpropertyImage);

 

    this.propertyamenities = pendingpropertydata["amenitiesData"][0];
    this.amenitieslist =  [];

    for (var value in this.propertyamenities) {
      if (this.propertyamenities.hasOwnProperty(value)) {
          console.log('value', this.propertyamenities[value]);
          this.amenitieslist.push(this.propertyamenities[value]);
         }
        
      }

      console.log(this.amenitieslist);

    this.apiService.getnewsupporterproperty().subscribe((propertydata)=>{
            this.table2 = propertydata["data"]

            this.dataintable = pendingpropertydata["propertyData"]
            this.spinnerService.hide();
            this.dataintable.forEach(obj1 => {
              this.table2.forEach(obj2 => {

              if(obj1.propCode == obj2.propCode){

                obj1.TotalUnit = obj2.TotalUnit;
                obj1.TotalFloor = obj2.TotalFloor;
                obj1.surveyor = obj2.surveyor;
              }
            })
          })
        })
        
      })
  }

  listClick(event, newValue) {
     
    this.selectedItem = newValue; 

    this.displayarray = this.selectedItem["units"]
  
}

submit(){
  var payload ={
    "status":"rejected",
    "reasonTitle":this.field.firstName,
    "rejectionReason":this.field.reason

  }

  this.apiService.updatestatus(this.propertypendingid,payload).subscribe((statuschange)=>{
    if(statuschange["status"] == 1){
      this.option = true;
      this.msgdisplay = "Property has been Rejected"
      setTimeout(function() {
        this.option = false;
       
    }.bind(this), 5000);
    }
  })
  console.log(this.field);

}

approved(){
  var payload ={
    "status":"pending"
  }
  console.log(payload)

  this.apiService.updatestatus(this.propertypendingid,payload).subscribe((statuschange)=>{
    if(statuschange["status"] == 1){
      this.option = true;
      this.msgdisplay = "Property has been approved Successfully"
      setTimeout(function() {
        this.option = false;
       
    }.bind(this), 5000);
    }
  })
}
plusSlides(n){
  this.showSlides(this.slideIndex += n);
 }

 currentSlide(idx){
   var n = idx+1;
   this.showSlides(this.slideIndex = n)
 }

 showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  
  var dots   = document.getElementsByClassName("demo") as  HTMLCollectionOf<HTMLElement>;
  
  // var captionText = document.getElementById("caption");

  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    
   // slides[i].style.display = "none";
   slides[i].style.display = "none";
   // slides[i].classList.add("removenone");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[this.slideIndex-1].style.display = "block";
  slides[this.slideIndex-1].classList.remove("removenone");
  dots[this.slideIndex-1].className += " active";

}
}
