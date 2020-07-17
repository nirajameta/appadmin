import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import{ApiService} from '../api.service';
import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';




@Component({
  selector: 'app-evalutepro',
  templateUrl: './evalutepro.component.html',
  styleUrls: ['./evalutepro.component.scss']
})
export class EvaluteproComponent implements OnInit {
  fetchunitdata:any;
  displaydirection:boolean;
  unitdata:any;
  Unitno:any;
  unit_evalution:any;
  objforMainentrance = {};
  selected:any;
  ratingdirection:any;
  display:any;
  addressdetail:any;
  showonlastindex:boolean;
  element: HTMLElement;
  functionvalue:any;
  rating:any;
  tips:any;
  ratingdisplay:any;
  lasrrating:any;
  size:any;
  selected1:any;
  directionmsg:string;


  constructor(public dataservice:DataService,public apiService:ApiService) { }

  ngOnInit() {
    this.displaydirection = true;
    this.showonlastindex = false;
    this.rating ="1";
    this.fetchunitdata = this.dataservice.uservalue;
    
    console.log(this.fetchunitdata);
   
    //  this.dataservice.uservalue = sessionStorage.getItem("propid");
    //  console.log(sessionStorage.getItem("propid"));
    //  sessionStorage.setItem("propid",this.dataservice.uservalue)

    //  console.log(this.dataservice.uservalue);       

    this.apiService.getratingsdetail(24).subscribe((res)=>{
      console.log(res);
      this.unitdata = res["data"];
      this.unit_evalution = []
      this.addressdetail = res["address"];
      this.Unitno = this.unitdata[0].unitno
      this.unit_evalution = this.unitdata[0]["unit_evalution"];
      console.log(this.unit_evalution);
      
    })
    //this.getStars(this.unit_evalution)
    }

  displaydetails(){
   // this.displaydirection = true;
  }
 
  

  select(item) {
    this.showonlastindex = false;


    this.lasrrating  = [];
      this.unit_evalution.forEach(obj => {
          console.log(obj.rating);
          if(obj.rating == null){
            this.lasrrating.push(obj.rating)

          }

       
      })
     console.log('the rating value is'+this.lasrrating.length); 
    
    if(this.lasrrating.length == 1){
      this.showonlastindex = true;
    }
    this.displaydirection = false;
    
    this.selected = item; 
    console.log("selected Item"+ this.selected)
   // var slides = document.getElementsByClassName("sidedirection") as HTMLCollectionOf<HTMLElement>;
   for (var i = 0; i < this.unit_evalution.length; i++) {
     if(this.selected == i){
       console.log(i)
        console.log(this.selected);
      
        this.display = [];
       
     this.display.push(this.unit_evalution[i])
      //  this.display = this.ratingdirection[i-1]
        console.log(this.display);
       
     }
    
    }
    

  };
  isActive(item) {
    return this.selected === item;
  };

  isActive1(item) {
    return this.selected1 === item;
  };
 
  clickevent(value):any{
   this.selected1 = value

   // console.log(value)
    this.functionvalue = value;
   console.log(this.functionvalue);
   
 }

 getStars(rating) {
   
  // Get the value
  var val = parseFloat(rating);
 

  if(val ==1){
    this.size = "assets/image/1rating.png"
  }
  if(val ==1.5){
    this.size  = "assets/image/1.5rating.png"
  }
  if(val ==2){
    this.size  = "assets/image/2rating.png"
  }
  if(val ==2.5){
    this.size  = "https://images-gmi-pmc.edge-generalmills.com/e1e4a436-c323-4990-a26c-44333211d547.jpg"
  }

  // Turn value into number/100
 
  return this.size 
}
//  clickevent2(){
//   alert("clicked 2")
 
// }
 
 saveSubmitButton(){
  console.log(this.tips);
  console.log(this.rating);

  console.log(this.functionvalue);
  console.log(this.display);
  console.log(this.display[0]);
  var payload = {
    "unitID":this.display[0].unitID,
    "areaName":this.display[0].areaName,
    "direction":this.functionvalue,
    "rating":this.rating,
    "tips":this.tips
    
  } 

  console.log(payload);

  if(payload.direction === undefined){
    this.directionmsg = "Please Select the Direction"
  }

  else{
    this.apiService.updaterating(payload, this.display[0].unit_evalutionID).subscribe((propertydata)=>{
      console.log(propertydata)
      
      this.apiService.getratingsdetail(24).subscribe((res)=>{
            this.unitdata = res["data"];
           // alert("record updated successfully!");
            this.unit_evalution = []
            this.addressdetail = res["address"];
            this.Unitno = this.unitdata[0].unitno
            this.unit_evalution = this.unitdata[0]["unit_evalution"];
            this.directionmsg = "Record has been Updated Successfully";
            

            
      
        })
      
    })
  }
  

  }
  
}
