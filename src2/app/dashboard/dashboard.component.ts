import { Component, OnInit, Input, NgZone } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ApexCharts from '../../assets/js/apexchart.js';
import{ApiService} from '../api.service';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { MapsAPILoader } from '@agm/core';








declare var $: any;
declare var google:any;

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
    <div class="modal-body popupbody">
    <h4> <b>Project Name</b> :  {{policy.project_name | titlecase}} </h4>
    <h4><a href="http://maps.google.com/?q= {{policy.address}}" target="_blank"><b>Address</b> : {{policy.address | titlecase }}</a></h4>
     <h4><b>City</b> : {{policy.city | titlecase }}</h4>
     <h4><b>State</b> : {{policy.state | titlecase }}</h4>
     <h4><b>PinCode</b> : {{policy.pincode }}</h4>
    </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
     </div>
  `
})
export class dashboardContent {
  @Input() policy:any; 

  constructor(public activeModal: NgbActiveModal) {}
}




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  total:any;
  order: string = 'propertyid';
  pendingpro:number;
  totalpro:number;
  reverse: boolean = false;
  table:any= [];
  apexchart:any;
  sortedCollection: any[];
  p: number = 1;
  location:any;
  lat: number  
  lng: number 
  zoom:number = 12;


 

  constructor(private orderPipe: OrderPipe, private modalService: NgbModal, public apiService:ApiService,private mapsAPILoader: MapsAPILoader, private _zone: NgZone) {
    // this.table = [
    //   { propertyid: 1,project:'sun',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 2,project:'Mehul Test',surveyor:'Rohit Shetty', Units:35, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 3,project:'SNMP',surveyor:'Rohit Patil1', Units:36, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 4,project:'GSTC',surveyor:'pk Patil', Units:37, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 5,project:'sun1',surveyor:'cl Patil', Units:38, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 6,project:'sun2',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 7,project:'sun3',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 8,project:'sun4',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 9,project:'sun5',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
    //   { propertyid: 10,project:'sun',surveyor:'Rohit Patil', Units:34, floors:4, Added_date:"Dec 1993" },
    // ]
    // this.sortedCollection = orderPipe.transform(this.table, 'project');
    // console.log(this.sortedCollection);

   }

  ngOnInit() {
    
      
   this.location = "Select by"

   

   if(this.location == "Select by"){
     this.lat = 23.0483975;
     this.lng = 72.5728674;
   }



    this.apiService.displaydata().subscribe((res)=>{
      console.log(res);
      
      console.log(res["data"]);
      // this.table = res["data"]

      // this.sortedCollection = this.orderPipe.transform(this.table, 'project');
      // console.log(this.sortedCollection);

    },
    (err:HttpErrorResponse) => {
      console.log(err)
   })


   //Get the New Added Data
   this.apiService.getnewadded().subscribe((newadded)=>{
      console.log(newadded);
      
      console.log(newadded["data"]);
      this.table = newadded["data"];
      this.sortedCollection = this.orderPipe.transform(this.table, 'project');
      console.log(this.sortedCollection);
  

   })




   // Get the Apex Chart Data
   this.apiService.roundchartdata().subscribe((res)=>{
    console.log(res);
    
    console.log(res["data"]);

    
    console.log(this.apexchart);
       this.pendingpro  = res["data"][0].pending;
       this.totalpro  = res["data"][0].total

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
                blur: 1,
                opacity: 1
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
                    fontFamily: 'Gotham',
                    offsetY: 20,
                    
                    
                  },
                  value: {
                      fontSize: '24px',
                      offsetY: -20,
                      formatter: function (val) {
                        return val 
                      }
                  },
                
                  total: {
                      show: true,
                      fontFamily: "Gotham",
                      label: 'Total',
                      formatter: function (w) {
                          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                          return w.globals.seriesTotals.reduce((a, b) => {
                            //return a + b
                            return res["data"][0].approved + res["data"][0].pending + res["data"][0].rejected
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
      series: [res["data"][0].approved, res["data"][0].pending,res["data"][0].rejected],
      
      labels: ['Completed', 'Pending', 'Rejected'],
      
  }

  new ApexCharts(document.querySelector("#chart2"), options2).render();

    



    // this.sortedCollection = this.orderPipe.transform(this.table, 'project');
    // console.log(this.sortedCollection);

  },
  (err:HttpErrorResponse) => {
    console.log(err)
 })



 
   
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  datapolicy(policy: object){
    const modalRef = this.modalService.open(dashboardContent);
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

 

  markerDragEnd($event) {
    console.log($event);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    console.log(this.lat);
    //this.getAddress(this.latitude, this.longitude);
  }







 
      
      

  

  
  


}
