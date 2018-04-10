import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

declare var require: any;
const Highcharts = require('highcharts');
Highcharts.setOptions({
  chart: {
      backgroundColor: {
          linearGradient: [0, 0, 500, 500],
          stops: [
              [0, 'rgb(255, 255, 255)'],
              [1, 'rgb(240, 240, 255)']
              ]
      },
      lang: {
        drillUpText: 'Go back'
    },
      borderWidth: 1,
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

//  xyz(e, point) {
//    alert("this is xyz");
//     var pointName = e.point.name;
//     point.options.chart.drilled = true;
//     var charts = Highcharts.charts;
//     Highcharts.each(charts, function(c, i) {
//       if (!c.options.chart.drilled) {
//         c.options.chart.drilled = true;
//         Highcharts.each(c.series[0].data, function(p, j) {
//           if (p.name === pointName) {
//             p.doDrilldown();
//           }
//         })
//       }
//     })
//   };

drilldown()
{
  alert("hi");
}
  constructor() {

     }
  
 
 
  chart = new Chart({
    chart: {
      type: 'line',
      events:{drilldown:function(e){
          alert("hi");}},
      zoomType: 'xy',
    },
    title: {
      text: 'Linechart'
    },
    plotOptions: {column: {colorByPoint: true}},
    exporting: {        
      enabled: true,
     },
     series: [{
      name: 'Operating Systems',
      data: [
        {
          name: 'Windows',
          y: 88.19,
          drilldown: 'windows-versions'
        },
        ['MacOSX', 9.22],
        ['Linux', 1.58],
        ['Others', 1.01]
      ]
    }],
    drilldown: {
      series: [{
        name: 'Windows versions',
        id: 'windows-versions',
        data: [
          ['Win 7', 55.03],
          ['Win XP', 15.83],
          ['Win Vista', 3.59],
          ['Win 8', 7.56],
          ['Win 8.1', 6.18]
        ]
      }]
    }
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
          depth: 45,
          
      }
  },
series: [{
  name: 'Operating Systems',
  data: [
    {
      name: 'Windows',
      y: 88.19,
      drilldown: 'windows-versions'
    },
    ['MacOSX', 9.22],
    ['Linux', 1.58],
    ['Others', 1.01]
  ]
}],
drilldown: {
  series: [{
    name: 'Windows versions',
    id: 'windows-versions',
    data: [
      ['Win 7', 55.03],
      ['Win XP', 15.83],
      ['Win Vista', 3.59],
      ['Win 8', 7.56],
      ['Win 8.1', 6.18]
    ]
  }]
}
});

/*
function to zoom the graph
*/
zoomContent() {
  this.chart.ref.yAxis[0].setExtremes(100, 150) ;
}

/*
function to rest the zoom in graph
*/ 
resetZoom()
{
  this.chart.ref.yAxis[0].setExtremes(null,null);
}

  ngOnInit() {
  }

}
