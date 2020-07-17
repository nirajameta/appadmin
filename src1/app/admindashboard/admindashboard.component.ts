import { Component, OnInit, NgZone } from '@angular/core';

import * as $ from 'jquery';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as CanvasJS from '../../assets/js/canvasjs.min';
import * as Chart from '../../assets/js/Chart.js';



am4core.useTheme(am4themes_animated);


declare var datemode:any;

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  lat: number = 51.673858;
  lng: number = 7.815982;

  Linechart:any;  

  constructor(private zone: NgZone) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    
    
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(182, 82, 152,0.5)',
      
    },
    { // dark grey
      backgroundColor: 'rgba(48, 35, 174,0.5)',
     
    },
   
  ];

 
  public barChartLegend = false
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Residential'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Commercial'}
  ];

  ngOnInit() {
    


    am4core.useTheme(am4themes_animated);
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.PieChart);

      chart.paddingRight = 10;


      chart.data = [ {
        "country": "Lithuania",
        "litres": 650
      }, {
        "country": "Czech Republic",
        "litres": 280
      }, {
        "country": "Ireland",
        "litres": 100
      } ];
      
      // Set inner radius
      chart.innerRadius = am4core.percent(50);
      
      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.ticks.template.disabled = true;
      pieSeries.alignLabels = false; //Custmize
      pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%"; //Custmize
      pieSeries.labels.template.radius = am4core.percent(-20); //Custmize
      pieSeries.labels.template.fill = am4core.color("white");
      pieSeries.slices.template.strokeWidth = 0;
      pieSeries.slices.template.strokeOpacity = 0;

      //Custmize
      let label = pieSeries.createChild(am4core.Label);
      label.text = "349";
      label.horizontalCenter = "middle";
      label.verticalCenter = "middle";
      label.fontSize = 30;

      //Custmize color

      var colorSet = new am4core.ColorSet();
      colorSet.list = ["#e74c60", "#9b57cb", "#e66083"].map(function(color) {
        return am4core.color(color);
      });
      pieSeries.colors = colorSet;
      
      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 0;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
      pieSeries.tooltip.getFillFromObject = false;
      pieSeries.tooltip.background.fill = am4core.color("#000000");


      // pieSeries.labels.template.adapter.add("radius", function(radius, target) {
      //   if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
      //     return 0;
      //   }
      //   return radius;
      // });
      
      // pieSeries.labels.template.adapter.add("fill", function(color, target) {
      //   if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
      //     return am4core.color("#000");
      //   }
      //   return color;
      // });
    
  
     
    });

    // var chart = new CanvasJS.Chart("chartContainer", {
    //   animationEnabled: true,
    //   title: {
    //     // text: "Number of iPhones Sold in Different Quarters"
    //   },
     
   
    //   data: [{
    //     indexLabelFontColor: "darkSlateGray",
    //     name: "views",
    //     type: "area",
    //     fillOpacity: .5,
    //     color: "#f5b790",

    //     axisX:{
    //       title: "Axis Title with margin",
    //       margin: 10
    //      },
        
    //     dataPoints: [
          
    //       { x: 1, y: 5, label: "1" },
    //       { x: 2, y: 10, label: "2" },
    //       { x: 3, y: 12, label: "3" },
    //       { x: 4, y: 15, label: "4" },
    //       { x: 5, y: 35, label: "5",markerColor: "red" },
    //       { x: 6, y: 22, label: "6" },
    //       { x: 7, y: 25, label: "7" },
    //       { x: 8, y: 30, label: "8" },
    //       { x: 9, y: 40, label: "9"}
    //     ]
    //   }]
    // });
    // chart.render();

    this.Linechart = new Chart('canvas', {  
      type: 'line',  
      data: {  
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],

        datasets: [{
          label: "Sessions",
          lineTension: 0,
          backgroundColor: "#ffdbc5",
          borderColor: "#f5b790",
          pointRadius: 4,
          pointBorderWidth:0,
          pointBackgroundColor: "#f5b790",
          pointBorderColor: "transparent",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#f5b790",
          pointHitRadius: 20,
         
          data: [200, 301, 262, 183, 182, 286, 312, 332, 258, 241, 326, 319, 384],
        }]
      },  
      options: {  
        legend: {  
          display: false  
        },  
        scales: {  
          xAxes: [{
            
            display: true  
           
          }], 
          yAxes: [{
            ticks: {
              min: 0,
              max: 500,
              maxTicksLimit: 6
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }], 
        }  
      }  
    });  
    
  }

  open(){
     new datemode()
  }
  clickevent($event){
   // document.getElementById('prod').value=event.target.name
 // const inputElement1: HTMLInputElement = document.getElementById('prod') as HTMLInputElement
   //const inputValue: string = InputElement1.value
   let inputValue = (document.getElementById('prod') as HTMLInputElement).value;
    console.log(inputValue);
    console.log(event.target);

  }

}
