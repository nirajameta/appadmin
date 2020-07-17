import { Component, OnInit,Input } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderPipe } from 'ngx-order-pipe';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
import{ApiService} from '../api.service';
import {HttpErrorResponse} from '@angular/common/http';




@Component({
  selector: 'ngbd-modal-content',
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
export class NgbdModalContent {
  @Input() policy:any; 

  constructor(public activeModal: NgbActiveModal) {}
}




@Component({
  selector: 'app-propertylist',
  templateUrl: './pendingpropertylist.component.html',
  styleUrls: ['./pendingpropertylist.component.scss']
})
export class PropertylistComponent implements OnInit {

  order: string = 'propertyid';

  reverse: boolean = false;
  table:any= []
  table1:any
  table2:any
  sortedCollection: any[];
  p: number = 1;
  total;any;  
  filter:any;
  config: any;
  collection = { count: 10, data: [] };
  proptype:any;
  isAscendic = true
  

  constructor(private orderPipe: OrderPipe, private modalService: NgbModal, private router: Router, public dataservice:DataService, public apiService:ApiService) {
    this.table = [
      { propertyid: 1,project:'sun',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Residential", Units:34, floors:4, Added_date:"Dec 1993" },
      { propertyid: 2,project:'Mehul Test',surveyor:'Rohit Shetty',builder:"Rahul", projecttype:"Residential", Units:35, floors:4, Added_date:"Dec 1993" },
      { propertyid: 3,project:'SNMP',surveyor:'Rohit Patil1', builder:"Rahul", projecttype:"Residential", Units:36, floors:4, Added_date:"Dec 1993" },
      { propertyid: 4,project:'GSTC',surveyor:'pk Patil', builder:"Mukesh", projecttype:"Residential", Units:37, floors:4, Added_date:"Dec 1993" },
      { propertyid: 5,project:'sun1',surveyor:'cl Patil', builder:"Mukesh", projecttype:"Residential", Units:38, floors:4, Added_date:"Dec 1993" },
      { propertyid: 6,project:'sun2',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Residential", Units:34, floors:4, Added_date:"Dec 1993" },
      { propertyid: 7,project:'sun3',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Residential", Units:34, floors:4, Added_date:"Dec 1993" },
      { propertyid: 8,project:'sun4',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Residential", Units:34, floors:4, Added_date:"Dec 1993" },
      { propertyid: 9,project:'sun5',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Commercial", Units:34, floors:4, Added_date:"Dec 1993" },
      { propertyid: 10,project:'sun',surveyor:'Rohit Patil', builder:"Mukesh", projecttype:"Commercial", Units:34, floors:4, Added_date:"Dec 1993" },
    ]
    this.sortedCollection = orderPipe.transform(this.table, 'project');
    console.log(this.sortedCollection);

   }

  ngOnInit() {
    this.proptype = "proptype"
  //   this.apiService.getpendingproperty().subscribe((res)=>{
  //     console.log(res);
      
  //     console.log(res["data"]);
  //     this.table = res["data"]

  //      this.sortedCollection = this.orderPipe.transform(this.table, 'project');
  //      console.log(this.sortedCollection);

  //   },
  //   (err:HttpErrorResponse) => {
  //     console.log(err)
  //  })
  // this.apiService.getpendingdetaildata().subscribe((alldata)=>{
  //     this.table1 = alldata

  //     this.apiService.getpendingproperty().subscribe((propertydata)=>{
  //       this.table2 = propertydata["data"]

  //       this.table1.forEach(obj1 => {
         
  //         this.table2.forEach(obj2 => {

  //           if(obj1.propCode == obj2.propCode){


  //             obj1.surveyor = obj2.surveyor;
  //             obj1.TotalUnit = obj2.TotalUnit;
  //             obj1.TotalFloor = obj2.TotalFloor;
  //           }
            
              
  //         })


  //       })

  //       console.log(this.table1);

  //       this.table = this.table1;

      
  //     })


  //   })

  this.apiService.getpendingproperty().subscribe((propertydata)=>{
       this.table  = propertydata["data"]

  })

  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  datapolicy(policy: object){
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.policy = policy;
  }

  propertydetail(policy:object){

  //   this.apiService.pendingpropertylistdetail(policy["propCode"]).subscribe((pendingpropertydata)=>{
  //     this.table1  = pendingpropertydata
  //     console.log(this.table1);

  //    this.dataservice.user = this.table1;

  // })
    this.dataservice.user = policy["propCode"];
    this.router.navigate(['./pendingpropertydetail'],{skipLocationChange:true});

  }

  clearFilter(proptype){
    console.log(proptype);
    this.setOrder('projecttype') 

   // this.ascendicprice();
  }

  // ascendicprice(){
  //   this.isAscendic = false;
  //   this.table.sort((a, b) => {
  //     if (a.projecttype < b.projecttype) return -1;
  //     else if (a.projecttype > b.projecttype) return 1;
  //     else return 0;
  //   });
  // }
  
}
