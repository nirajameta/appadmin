import { Component, OnInit } from '@angular/core';

import{ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

declare var zoomimg:any;
declare var zoomimg2:any
@Component({
  selector: 'app-evalutepro',
  templateUrl: './evalutepro.component.html',
  styleUrls: ['./evalutepro.component.scss']
})
export class EvaluteproComponent implements OnInit {
  unit_evalution:any;
  fetchunitdata:any;
  displaydirection:boolean;
  unitdata:any;
  Unitno:any;
 
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
  msgonsubmit:boolean=false;
  alertmsg:string;
  layoutimg:any;
  satelliteimg:any;
  brochureimg:any;
  evalutionproid: number;
  public subpro: any;
  imagedata:any;

 


  constructor(public apiService:ApiService,
    private route: ActivatedRoute, public dataservice:DataService) { }

  ngOnInit() {
    this.displaydirection = true;
    this.showonlastindex = false;
    this.rating ="1";

    console.log(this.dataservice.user);
    this.imagedata = this.dataservice.user
    console.log(this.imagedata);
    // this.layoutimg = this.imagedata.layoutimg;
    // this.satelliteimg = this.imagedata.satelliteimg;
    // this.brochureimg = this.imagedata.brochureimg;
   console.log(this.layoutimg);


    this.subpro = this.route.params.subscribe(params => {
      // this.evalutionproid = 24 // (+) converts string 'id' to a number
      this.evalutionproid = +params['id'];
    });
   
    console.log(this.evalutionproid);
   
      

    this.apiService.getratingsdetail(this.evalutionproid).subscribe((res)=>{
      console.log(res);
      this.unitdata = res["data"];
      console.log(this.unitdata);
      
      this.addressdetail = res["address"];
      this.Unitno = this.unitdata[0].unitno
      this.unit_evalution = this.unitdata[0]["unit_evalution"];
      console.log(this.unit_evalution);
      console.log(this.unit_evalution[0])
      
    })
   
    }

  displaydetails(){
   // this.displaydirection = true;
  }
 
  zoomimg(){

  }

  select(item) {
    this.showonlastindex = false;

    console.log(this.isActive1(item))
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
          this.rating = this.display[0].rating;
          console.log(this.rating);

         this.clickevent(this.display[0].direction); 
         console.log(this.isActive1(this.display[0].direction));
       
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
  if(val == 0.5){
    this.size  = "assets/image/rating_slices/half.png"
  }

  if(val ==1){
    this.size = "assets/image/rating_slices/full.png"
  }
  if(val ==1.5){
    this.size  = "assets/image/rating_slices/half_full.png"
  }
  if(val ==2){
    this.size  = "assets/image/rating_slices/2full.png"
  }


  // Turn value into number/100
 
  return this.size 
}

 
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
    this.msgonsubmit = true;
    this.alertmsg = "Please Select the Direction"

    setTimeout(function() {
      this.msgonsubmit = false;
      
  }.bind(this), 5000);
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

            this.msgonsubmit = true;
            this.alertmsg = "Record has been Updated Successfully";
            

            
      
        })
      
    })
    setTimeout(function() {
      this.msgonsubmit = false;
      
  }.bind(this), 5000);
  }

  

  }
  
}
