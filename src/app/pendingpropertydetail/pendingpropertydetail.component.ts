import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import sampleData from '../data.json';
import {Router} from '@angular/router';
// import 'jquery-ui-dist/jquery-ui';
import{ApiService} from '../api.service';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { MapsAPILoader } from '@agm/core';
import { DataService } from '../data.service';




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
 propertypendingid: number;
 public sub: any;
 layoutimg:any;
 satelliteimg:any;
 brochureimg:any;
 
 slideIndex:number = 1;
 zoom:number = 12;
 addresslocation:any;
 lat:number;
 lng:number;
 datatransfer:any;
 propertyname:string;
 option:boolean = false;
 msgdisplay:string;



  constructor(private route: ActivatedRoute,private router: Router, public apiService:ApiService, location: Location, public spinnerService: Ng4LoadingSpinnerService, private mapsAPILoader: MapsAPILoader, private _zone: NgZone, public dataservice:DataService) { }

  ngOnInit() {
    this.spinnerService.show();
    
    this.sub = this.route.params.subscribe(params => {
    this.propertypendingid = +params['id']; // (+) converts string 'id' to a number
    });

    
 
   console.log(this.propertypendingid);
    // sessionStorage.setItem("propid", this.propID)

   
    // console.log(sessionStorage.getItem("propid")); 

    
    

    this.apiService.pendingpropertylistdetail(this.propertypendingid).subscribe((pendingpropertydata)=>{
      
    
     // this.dataservice.user = pendingpropertydata["propertyData"][0]
       this.displayarray = pendingpropertydata["propertyData"][0].wings[0]["units"];
       this.propertyimg = pendingpropertydata["propertyImages"][0]
       this.propertyname = pendingpropertydata["propertyData"][0].project_name

       this.addresslocation = pendingpropertydata["propertyData"][0].area + pendingpropertydata["propertyData"][0].city + "," + pendingpropertydata["propertyData"][0].state
        console.log(this.addresslocation);

        this.mapsAPILoader.load().then(() => {
          this.apiService.getGeoLocation(this.addresslocation).subscribe(
            results => {
                this._zone.run(() => {
                 this.lat =  results.lat();
                 this.lng =  results.lng();
                 

                });
            }
        );
        
        })
      

       this.arrayforpropertyImage = []

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
      this.apiService.getImages(this.propertypendingid).subscribe((pendingpropertyImages)=>{
        console.log(pendingpropertyImages["data"][0]["layout_image"]);
        console.log(pendingpropertyImages["s_images"][0]["satelliteImage"]);
        console.log(pendingpropertyImages["b_images"][0]["brochure_image"]);
        this.layoutimg = this.staticimgUrl+pendingpropertyImages["data"][0]["layout_image"]
        this.satelliteimg = this.staticimgUrl+pendingpropertyImages["s_images"][0]["satelliteImage"]
        this.brochureimg = this.staticimgUrl+pendingpropertyImages["b_images"][0]["brochure_image"]

        this.datatransfer = {};
        this.datatransfer.layoutimg = this.staticimgUrl+pendingpropertyImages["data"][0]["layout_image"];
        this.datatransfer.satelliteimg = this.staticimgUrl+pendingpropertyImages["data"][0]["layout_image"];
        this.datatransfer.brochureimg = this.staticimgUrl+pendingpropertyImages["data"][0]["layout_image"];
        console.log(this.datatransfer);

        this.dataservice.user = this.datatransfer;
        

      })


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

      this.spinnerService.hide();
  
    }

  

    listClick(event, newValue) {
     
      this.selectedItem = newValue; 

      this.displayarray = this.selectedItem["units"]
    
  }

  gotoratingpage(wingsdata){
  //  this.router.navigate(['./evaluteproperty',wingsdata.unitID]);
    this.router.navigate(['./evaluteproperty',24]);
  }
 
  approved(){
    var payload ={
      "status":"approved"
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

 
  // zoomin(){
  // var myImg = document.getElementById("img1");
    

  // var currWidth = myImg.clientWidth;
  //  var currheight = myImg.clientHeight;
  // if (currWidth == 1000) return false;
  // else {
  //   myImg.style.width = (currWidth + 100) + "px";
  //   myImg.style.height = (currheight + 100) + "px";
  //   myImg.style.overflow = "scroll";
  // //  $("#img1").draggable();
  // }
  // myfunction()

 
  // }


  // zoomout(){
  //   var myImg = document.getElementById("img1");
      
    
  //   var currWidth = myImg.clientWidth;
  //    var currheight = myImg.clientHeight;
  //   if (currWidth == 1000) return false;
  //   else {

  //     if(myImg.style.width > 402 + "px"){
  //       myImg.style.width = (currWidth - 100) + "px";
  //       console.log(myImg.style.width)
  //       myImg.style.height = (currheight - 100) + "px";
  //       myfunction()
  //     }
     
  
  //   }
    
  
   
  //   }

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
