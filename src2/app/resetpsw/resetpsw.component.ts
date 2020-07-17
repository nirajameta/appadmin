import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-resetpsw',
  templateUrl: './resetpsw.component.html',
  styleUrls: ['./resetpsw.component.scss']
})
export class ResetpswComponent implements OnInit {

  displaydiv:boolean;



  constructor() { }

  ngOnInit() {
    this.displaydiv = true;
    $(".logina").addClass("login-reg-panel");
  }

  successmsg(){
    this.displaydiv = false;
    $(".loginp").addClass("reset-reg-panel");
    $(".logina").removeClass("login-reg-panel");
  
  }

}
