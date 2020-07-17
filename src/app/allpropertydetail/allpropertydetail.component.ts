import { Component, OnInit } from '@angular/core';
import sampleData from '../data.json';
import { ActivatedRoute } from '@angular/router';  
import{ApiService} from '../api.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-allpropertydetail',
  templateUrl: './allpropertydetail.component.html',
  styleUrls: ['./allpropertydetail.component.scss']
})
export class AllpropertydetailComponent implements OnInit {
  Users: any = sampleData;
  images: Array<any> = [];
  arrayforpropertyImage:any;
  slideIndex :number = 1;
  amenitieslist:any;
  enable:boolean;
  allpropertyid: any;
  allpropertystatus: any;
  public sub: any;
  displayarray:any;
  propertyimg:any;
  table1:any;
  propertyamenities:any;
  dataintable: any;
  selectedItem:any;
  staticimgUrl = environment.baseUrl;

  constructor(private route: ActivatedRoute, public apiService:ApiService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.allpropertyid = params['id'];
      this.allpropertystatus = params['id2']; 
      console.log(this.allpropertyid);
      console.log(this.allpropertystatus);
      // (+) converts string 'id' to a number
      });

      this.apiService.getallpropertydetail(this.allpropertyid, this.allpropertystatus).subscribe((propertydata)=>{
       
        this.displayarray = propertydata["propertyData"][0].wings[0]["units"];
        console.log(this.displayarray);
        this.propertyimg = propertydata["propertyImages"][0]

        this.arrayforpropertyImage = []
        for (var value in this.propertyimg) {
          if (this.propertyimg.hasOwnProperty(value)) {
             
              if(this.propertyimg[value] !== "undefined"){
                this.arrayforpropertyImage.push(this.propertyimg[value]);
                
              }
              
          }
      }

      this.propertyamenities = propertydata["amenitiesData"][0];
      this.amenitieslist =  [];
  
      for (var value in this.propertyamenities) {
        if (this.propertyamenities.hasOwnProperty(value)) {
            console.log('value', this.propertyamenities[value]);
            this.amenitieslist.push(this.propertyamenities[value]);
           }
          
        }

        this.apiService.getallpropertymatch(this.allpropertystatus).subscribe((propertydatastatus)=>{
          this.table1  = propertydatastatus["data"]
          this.dataintable = propertydata["propertyData"]
         
          this.dataintable.forEach(obj1 => {
            this.table1.forEach(obj2 => {

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
    console.log(this.displayarray);
    
  
}

  

  onChange(wingsdata){
    console.log(wingsdata);

    var payload={
      "wingsID": wingsdata.wingsID,
      "unitno": wingsdata.unitno,
      "rate": wingsdata.rate,
      "totalRating": wingsdata.totalRating,
      "bhk": wingsdata.bhk,
      "sq_feet": wingsdata.sq_feet,
      "publish": wingsdata.publish,
      "floor": wingsdata.floor,
    }
    console.log(payload);
    this.apiService.updatepublishstatus(wingsdata.unitID, payload).subscribe((updatedata)=>{
      console.log(updatedata);

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
