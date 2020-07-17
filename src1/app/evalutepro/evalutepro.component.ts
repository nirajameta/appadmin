import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-evalutepro',
  templateUrl: './evalutepro.component.html',
  styleUrls: ['./evalutepro.component.scss']
})
export class EvaluteproComponent implements OnInit {
  fetchunitdata:any;
  displaydirection:boolean
  
  slideIndex :number = 1;
  arrayname:any;

  constructor(public dataservice:DataService) { }

  ngOnInit() {
    this.displaydirection = true;
    this.fetchunitdata = this.dataservice.user
    console.log(this.fetchunitdata);
    this.arrayname = ["1","2","3","4","5","6","7","8"]
  }

    currentSlide(n){
      this.displaydirection = false;
     this.showSlides(this.slideIndex = n)
   }

  // displaydetails(){
    
  // }

   showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("sidedirection") as HTMLCollectionOf<HTMLElement>;
     console.log(slides);
     var dots   = document.getElementsByClassName("demo") as  HTMLCollectionOf<HTMLElement>;
     console.log(dots);
     // var captionText = document.getElementById("caption");
   
     if (n > slides.length) {this.slideIndex = 1}
     if (n < 1) {this.slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
       
      slides[i].style.display = "none";
            this.displaydirection = false;

     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace("active", "");
     }
     slides[this.slideIndex-1].style.display = "block";
     //slides[this.slideIndex-1].classList.remove("removenone");
     dots[this.slideIndex-1].className += " active";
 
   }

}
