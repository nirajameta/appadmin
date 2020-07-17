import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var openNav:any;
declare var closeNav:any
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  usertype:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.usertype = localStorage.getItem("usertype")
  }
  openNav(){
    new openNav()
  }
  closeNav(){
    new closeNav()
  }

  gotodasgboard(){
    if(this.usertype == "expert"){
      this.router.navigate(['/dashboard']); 
    }
    else if(this.usertype == "admin"){
      this.router.navigate(['/admindashboard']); 
    }
  }
  gotoproperty(){
    if(this.usertype == "expert"){
      this.router.navigate(['/pendingpropertylist']); 
    }
    else if(this.usertype == "admin"){
      this.router.navigate(['/allpropertylist']); 
    }
  }

  expertlist(){
    this.router.navigate(['/expertlist', 'expert']); 
  }

  supporterlist(){
    this.router.navigate(['/expertlist', 'supporter']); 
  }
 

}
