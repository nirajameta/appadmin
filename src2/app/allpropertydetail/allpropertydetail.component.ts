import { Component, OnInit } from '@angular/core';
import sampleData from '../data.json';

@Component({
  selector: 'app-allpropertydetail',
  templateUrl: './allpropertydetail.component.html',
  styleUrls: ['./allpropertydetail.component.scss']
})
export class AllpropertydetailComponent implements OnInit {
  Users: any = sampleData;
  wings:any;
  images: Array<any> = [];
  slideIndex :number = 1;


  constructor() { }

  ngOnInit() {
    this.images = [
      { name: 'assets/image/slide/1.jpg',title:'title 1',rating:'8' },
      { name: 'assets/image/slide/2.jpg', title:'title 2',rating:'7' },
      { name: 'assets/image/slide/3.jpg',title:'title 3',rating:'6' },
      { name: 'assets/image/slide/4.jpg',title:'title 4',rating:'5' },
      { name: 'assets/image/slide/5.jpg',title:'title 5',rating:'8' },
      { name: 'assets/image/slide/6.jpg',title:'title 5',rating:'8' },
      { name: 'assets/image/slide/7.jpg',title:'title 5',rating:'8' },
     
    ]


    console.log(this.Users.employees);

    this.wings = this.Users.employees

    var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>
             slides[0].style.display = "block";
             
     //this.showSlides(1);
    //this.currentSlide(1);
  }

  plusSlides(n){
    this.showSlides(this.slideIndex += n);
   }
 
   currentSlide(idx){
     var n = idx+1;
     this.showSlides(this.slideIndex = n)
   }
 
    showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
     
     var dots   = document.getElementsByClassName("demo") as  HTMLCollectionOf<HTMLElement>;
     
     // var captionText = document.getElementById("caption");
   
     if (n > slides.length) {this.slideIndex = 1}
     if (n < 1) {this.slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
       
      // slides[i].style.display = "none";
      slides[i].style.display = "none";
      // slides[i].classList.add("removenone");
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace("active", "");
     }
     slides[this.slideIndex-1].style.display = "block";
     //slides[this.slideIndex-1].classList.remove("removenone");
     dots[this.slideIndex-1].className += " active";
 
   }

}
