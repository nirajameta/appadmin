import { Component, OnInit, Input, NgZone } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{ApiService} from '../api.service';

import * as ApexCharts from '../../assets/js/apexchart.js';
import { Observable, Observer } from 'rxjs';
import { MapsAPILoader } from '@agm/core';





declare var $: any;
declare var google;


declare var openNav:any;
declare var closeNav:any


@Component({
  selector: 'ngbd-modal1-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Location Details</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <b>Project Name</b>: {{policy.project}}<br>
    <b>Address</b>: <br>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModal1Content {
  @Input() policy:any; 

  constructor(public activeModal: NgbActiveModal) {}
}




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 

  order: string = 'propertyid';

  reverse: boolean = false;
  table:any= []
  sortedCollection: any[];
  p: number = 1;
  location:any;
  lat: number  
  lng: number 
  zoom:number = 12;
  country:any;
  countryname:any;
  lats:any;
 

  constructor(private orderPipe: OrderPipe, private modalService: NgbModal, public apiService:ApiService,private mapsAPILoader: MapsAPILoader, private _zone: NgZone) {
    this.table = [
      { propertyid: 1,project:'sun',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
      { propertyid: 2,project:'Mehul Test',surveyor:'Rohit Shetty', Units:35, floors:4, Added_date:"Dec 1993" },
      { propertyid: 3,project:'SNMP',surveyor:'Rohit Patil1', Units:36, floors:4, Added_date:"Dec 1993" },
      { propertyid: 4,project:'GSTC',surveyor:'pk Patil', Units:37, floors:4, Added_date:"Dec 1993" },
      { propertyid: 5,project:'sun1',surveyor:'cl Patil', Units:38, floors:4, Added_date:"Dec 1993" },
      { propertyid: 6,project:'sun2',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
      { propertyid: 7,project:'sun3',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
      { propertyid: 8,project:'sun4',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
      { propertyid: 9,project:'sun5',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
      { propertyid: 10,project:'sun',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
    ]
    this.sortedCollection = orderPipe.transform(this.table, 'project');
    console.log(this.sortedCollection);
   }

  ngOnInit() {
       
   this.location = "Select by"

   

   if(this.location == "Select by"){
     this.lat = 23.0483975;
     this.lng = 72.5728674;
   }


  
   // this.workouts=[{id:1,name:'hello1'},{id:2,name:'hello2'}]
   this.location = "selectby"
    var options2 = {
      chart: {
          height: 400,
          type: 'radialBar',
      },
      plotOptions: {
          radialBar: {
            hollow: {
              margin: 10,
              size: '50%',
              background: 'transparent',
              image: undefined,
              imageWidth: 150,
              imageHeight: 150,
              imageOffsetX: 0,
              imeOffagsetY: 0,
              imageClipped: true,
              position: 'front',
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5
              }
            },
            track: {
              show: true,
              startAngle: undefined,
              endAngle: undefined,
              background: '#ee7648',
              strokeWidth: '97%',
              opacity: 0.2,
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5
              }
            },
              dataLabels: {
                  name: {
                    color: "#000000",
                    fontSize: '20px',
                    fontFamily: "Gotham",
                    offsetY: 20
                  },
                  value: {
                      fontSize: '25px',
                      offsetY: -20,
                      fontweight: "500",
                      formatter: function (val) {
                        return val 
                      }
                  },
                
                  total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                          return w.globals.seriesTotals.reduce((a, b) => {
                            return a + b
                          }, 0)
                      }
                  }
              },
           
          }
      },
      fill: {
        type: "gradient",
        colors: ["#b6529a","#fdcaaa","#e64663"],
       
        gradient: {
          shade: "dark",
          type: "horizontal",
          gradientToColors: ["#e64663","#e64663","#ee7648"],
          stops: [0,50,100]
        }
      },
      series: [95, 70, 67],
      
      labels: ['Completed', 'Pending', 'Rejected'],

     
      
  }
   this.country = ["Banglore","Gujarat", "Rajasthan","Lumium Design"]

   for(var i = 0; i <= this.country.length; i++){
     console.log(this.country[i]);

    // this.takecountrylatlng(this.country[i]);

   }
 // new ApexCharts(document.querySelector("#chart2"), options2).render();
   
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  datapolicy(policy: object){
    const modalRef = this.modalService.open(NgbdModal1Content);
    modalRef.componentInstance.policy = policy;
  }
  onChange(location){
   // this.zoom = 10;
    this.mapsAPILoader.load().then(() => {
      this.apiService.getGeoLocation(location).subscribe(
        results => {
            this._zone.run(() => {
             this.lat =  results.lat();
             this.lng =  results.lng();
            });
        }
    );
    
  })
 }

//   takecountrylatlng(location1){
//       this.countryname = [];
//    // this.zoom = 10;
//     this.mapsAPILoader.load().then(() => {
//       this.apiService.getGeoLocation(location1).subscribe(
//         results => {
//             this._zone.run(() => {
//               this.lats = {}
//               console.log(results.lat())
//              this.lats["latitude"] =  results.lat();
//              this.lats["langtiude"] =  results.lng();
//              console.log(this.lats)
//              this.countryname.push(this.lats)
             
//             });
//           console.log(this.countryname); 
//         }
//     );
    
//   })
  
//  }

 

}
