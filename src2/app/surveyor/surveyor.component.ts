import { Component, OnInit } from '@angular/core';
import datatable from '../data.json';
import {Router} from '@angular/router';
import{ApiService} from '../api.service';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { array } from '@amcharts/amcharts4/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';





@Component({
  selector: 'app-surveyor',
  templateUrl: './surveyor.component.html',
  styleUrls: ['./surveyor.component.scss']
})
export class SurveyorComponent implements OnInit {

  table:any= [];
  users$: Object;
  subscription: Subscription
 //  Users: any = datatable;
  
  
  filter:any;
  countvalue:any= [];
  tablewithcount:any;
  constructor(private router: Router, public apiService:ApiService, public dataservice:DataService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {

    this.spinnerService.show();
   // this.table = this.Users.Surveyor;
    // console.log(this.table)

    // this.subscription = this.apiService.AdminSurveyor().subscribe((res) =>{
    //   this.users$ = res; 
    //     setTimeout(()=>
        
    //     {
          
    //       this.table = res["data"]
    //     }, 4000)
    //   }  )  
    // }

   
    this.subscription =  this.apiService.AdminSurveyordata().subscribe((res)=>{

      this.apiService.getAdminSurveyor().subscribe((countdata)=>{
        console.log(res);
       
        
         this.table = res;

         this.countvalue = countdata["data"]
         console.log(this.countvalue);

         this.table.forEach(obj => {
          this.countvalue.forEach(obj1 => {
            console.log(obj.firstName);
            console.log(obj1.lastName);
            if(obj.lastName ==  obj1.lastName){
               obj.approved = obj1.approved
               obj.pending = obj1.pending
               obj.rejected = obj1.rejected
            }
            
          })
             
          })

         
          this.tablewithcount = this.table
          this.spinnerService.hide();
          console.log(this.tablewithcount);
  

      })


   
      // this.sortedCollection = this.orderPipe.transform(this.table, 'project');
      // console.log(this.sortedCollection);

    },
    (err:HttpErrorResponse) => {
      console.log(err)
   })

  }

  editCar(data:object){
    this.dataservice.user = data["property"];
    // alert("Entering")
    
    
    this.router.navigate(['./allproperty'], {skipLocationChange: true});
   
  }
  deleteCar(data){
    // alert("list")
  }

}
