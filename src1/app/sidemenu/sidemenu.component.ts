import { Component, OnInit } from '@angular/core';
declare var openNav:any;
declare var closeNav:any
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav(){
    new openNav()
  }
  closeNav(){
    new closeNav()
  }

}
