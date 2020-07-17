import { Component, OnInit, ViewChild } from '@angular/core';
import{ApiService} from '../api.service';
import { MapsAPILoader } from '@agm/core';

declare var google: any;


@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent implements OnInit {
  @ViewChild('f',{static:false}) formValues;
  displaymessage:boolean;
  summaries:any;
  property: any = {};
  currentLocation:any;
  
  propertycode:any;
  constructor(public apiService:ApiService, private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
  
   
    this.property["prop_type"] = '';
    this.property["surveyorID"] = '';
    this.displaymessage = true;
    this.apiService.getallSurveyordata().subscribe((res)=>{
      console.log(res);
      this.summaries = res["data"]
      console.log(this.summaries);

    })  
  }

  // addproperty(){
  //   this.displaymessage = false;
  // }

  filterForeCasts(filterVal: any){
      console.log(filterVal);
  }

  currentlocation(property){
   // this.zoom = 12;
    console.log(property)
    // if (navigator)
    // {
    // navigator.geolocation.getCurrentPosition( pos => {
    //     this.lng = +pos.coords.longitude;
    //     this.lat = +pos.coords.latitude;
    //     // this.lng = 84.740530 ;
    //     //  this.lat = 25.776110;
    //     console.log(this.lng);
    //     console.log(this.lat);

    //     this.mapsAPILoader.load().then(() => {
    //       let geocoder = new google.maps.Geocoder;
    //       let latlng = {lat: this.lat, lng: this.lng};
    //       let that = this;
    //       geocoder.geocode({'location': latlng}, function(results) {
    //           if (results[0]) {
    //             console.log(results[0]);
                
    //             this.currentLocation = results[0].address_components[0].long_name +","+ results[0].address_components[1].long_name;
    //             console.log(this.currentLocation);
    //             property.name = this.currentLocation;
    //             console.log(property.name);
                
    //           } else {
    //             console.log('No results found');
    //           }
    //       });
    //     });

    //   });
    // }
  }

  onSubmitaddproperty(){
    console.log(this.property);
    
 
    console.log(this.property["project_name"]);
    this.apiService.addpropertydata(this.property).subscribe((res)=>{
      console.log(res);
      this.displaymessage = false;

      this.propertycode = res["propCode"]
      console.log(this.propertycode);

    })  
   this.formValues.resetForm();
  }

  addanother(){
    this.displaymessage = true;
  }


}
