import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent implements OnInit {

  displaymessage:boolean
  constructor() { }

  ngOnInit() {
    this.displaymessage = true;
  }

  addproperty(){
    this.displaymessage = false;
  }

}
