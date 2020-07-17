import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { DataService } from '../data.service';
import sampleData from '../data.json';
import {Router} from '@angular/router';
import{ApiService} from '../api.service';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';




// import '../../assets/js/jquery-ui.min.js';
// declare var jssor_1_slider_init:any;
declare var $: any;
declare var myfunction: any




@Component({
  selector: 'app-propertydetail',
  templateUrl: './pendingpropertydetail.component.html',
  styleUrls: ['./pendingpropertydetail.component.scss']
})
export class PropertydetailComponent implements OnInit {
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
 
 slideIndex:number = 1;



  constructor(private route: ActivatedRoute, public dataservice:DataService, private router: Router, public apiService:ApiService, location: Location) { }

  ngOnInit() {

    
 
    this.propID = this.dataservice.user
    // sessionStorage.setItem("propid", this.propID)

   
    // console.log(sessionStorage.getItem("propid")); 

    
    

    this.apiService.pendingpropertylistdetail(this.propID).subscribe((pendingpropertydata)=>{
    
     // this.dataservice.user = pendingpropertydata["propertyData"][0]
        this.displayarray = pendingpropertydata["propertyData"][0].wings[0]["units"];
       this.propertyimg = pendingpropertydata["propertyImages"][0]

      

       this.arrayforpropertyImage= []

       for (var value in this.propertyimg) {
        if (this.propertyimg.hasOwnProperty(value)) {
           
            if(this.propertyimg[value] !== "undefined"){
              this.arrayforpropertyImage.push(this.propertyimg[value]);
              
            }
            
        }
    }


 

    this.propertyamenities = pendingpropertydata["amenitiesData"][0];
    this.amenitieslist =  [];

    for (var value in this.propertyamenities) {
      if (this.propertyamenities.hasOwnProperty(value)) {
          console.log('value', this.propertyamenities[value]);
          this.amenitieslist.push(this.propertyamenities[value]);
         }
        
      }



    this.apiService.getpendingproperty().subscribe((propertydata)=>{
            this.table2 = propertydata["data"]

            this.dataintable = pendingpropertydata["propertyData"]
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

  gotoratingpage(wingsdata){
    console.log(wingsdata);
    this.dataservice.uservalue = wingsdata.unitID;
    this.router.navigate(['./evaluteproperty']);
  }
 


 
  zoomin(){
  var myImg = document.getElementById("img1");
    

  var currWidth = myImg.clientWidth;
   var currheight = myImg.clientHeight;
  if (currWidth == 1000) return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
    myImg.style.height = (currheight + 100) + "px";
    myImg.style.overflow = "scroll";
  //  $("#img1").draggable();
  }
  myfunction()

 
  }


  zoomout(){
    var myImg = document.getElementById("img1");
      
    
    var currWidth = myImg.clientWidth;
     var currheight = myImg.clientHeight;
    if (currWidth == 1000) return false;
    else {

      if(myImg.style.width > 402 + "px"){
        myImg.style.width = (currWidth - 100) + "px";
        console.log(myImg.style.width)
        myImg.style.height = (currheight - 100) + "px";
        myfunction()
      }
     
      
      // myImg.style.overflow = "scroll";
    //  $("#img1").draggable();
    }
    
  
   
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
