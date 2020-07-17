import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import {Router} from '@angular/router';
import{ApiService} from '../api.service';




@Component({
  selector: 'app-expertlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class ExpertlistComponent implements OnInit {
  filter:any;
  sub:any;
  user:any;
  table:any;
  constructor(private route: ActivatedRoute, private router: Router, public apiService:ApiService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      this.user = params['id']; 
      this.loadUserDetail(this.user);
      
      });
  }

  loadUserDetail(propertylist_type){
    console.log(propertylist_type);
       this.apiService.userlist(propertylist_type).subscribe((userdata)=>{
        console.log(userdata);
       this.table = userdata["data"]
      

  })
  }


  adduser(){
    this.router.navigate(['/addexpert',this.user]); 
  }

}
