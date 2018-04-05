import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
declare var require: any;
const Highcharts = require('highcharts');
//Highcharts.setOptions({ lang: { drillUpText: 'Go back'} });
Highcharts.setOptions({
  chart: {
      backgroundColor: {
          linearGradient: [0, 0, 500, 500],
          stops: [
              [0, 'rgb(255, 255, 255)'],
              [1, 'rgb(240, 240, 255)']
              ]
      },
      borderWidth: 2,
      plotBackgroundColor: 'rgba(255, 255, 255, .9)',
      plotShadow: true,
      plotBorderWidth: 1
  }
});

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})





export class LineChartComponent implements OnInit {

  constructor() { }
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'FootFall',
    //   data:  [
    //     ['Store A', 80000],
    //     ['Store B', 3],
    //     ['Store c', 1],
    //     ['Store D', 6]
    // ]
    data:[
      {
          "name": "Chrome44",
          "y": 62.74,
          "drilldown": "Chrome"
      },
      {
          "name": "Firefox",
          "y": 10.57,
          "drilldown": "Firefox"
      },
      {
          "name": "Internet Explorer",
          "y": 7.23,
          "drilldown": "Internet Explorer"
      },
      {
          "name": "Safari",
          "y": 5.58,
          "drilldown": "Safari"
      },
      {
          "name": "Edge",
          "y": 4.02,
          "drilldown": "Edge"
      },
      {
          "name": "Opera",
          "y": 1.92,
          "drilldown": "Opera"
      },
      {
          "name": "Other",
          "y": 7.62,
          "drilldown": null
      }
  ], 
  //drilldown: []
    }]
  });

  chart1 = new Chart({
    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      }
  },
  title: {
      text: 'Contents using Pie chart'
  },
  subtitle: {
      text: '3D donut in Highcharts'
  },
  plotOptions: {
      pie: {
          innerSize: 100,
          depth: 45
      }
  },
  series: [{
      name: 'FootFall Count',
      data: [
          ['Store A', 8],
          ['Store B', 3],
          ['Store c', 1],
          ['Store D', 6]
      ],
      
  }]
});

// add point to chart serie
// add() {
//   this.chart.addPoint(Math.floor(Math.random() * 10));
// }

  ngOnInit() {
  }

}
