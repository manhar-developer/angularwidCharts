import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

Highcharts.setOptions({
  chart: {
      backgroundColor: {
          linearGradient: [0, 0, 0, 50],
          stops: [
              [0, 'rgb(255, 255, 255)'],
              [1, 'rgb(240, 240, 255)']
              ]
      },
      events: {
        drilldown: function(e) {
          const thisIndex = e.point.index;
  
          if (!performedDrill) {
            performedDrill = !performedDrill;
  
            Highcharts.charts.forEach(function(chart) {
              if (e.target !== chart) {
                chart.get('first-series').points[thisIndex].doDrilldown(false);
              }
            });
          }
        },
        drillup: function(e) {
          if (performedDrill) {
            performedDrill = !performedDrill;
            Highcharts.charts.forEach(function(chart) {
              if (e.target !== chart) {
                chart.drillUp();
              }
            });
          }
        }
      },
      borderWidth: 1,
      plotBackgroundColor: 'rgba(255, 255, 255, .9)',
      plotShadow: true,
      plotBorderWidth: 1
  },
  lang: {},
  drilldown : {
  }});

let commonDrilldown = {
  series: [{
    id: 'first',
    colorByPoint: false,
    dataLabels: {
      enabled: false
    },
    data: [3, 2, 9]
  }, {
    id: 'second',
    colorByPoint: false,
    dataLabels: {
      enabled: false
    },
    data: [5, 2]
  }, {
    id: 'third',
    colorByPoint: false,
    dataLabels: {
      enabled: false
    },
    data: [7]
  }]
},
performedDrill = false;


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})





export class LineChartComponent implements OnInit {


  constructor() {}
  chart = new Chart({
    chart: {
            type: 'bar',
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
      id: 'first-series',
      data: [{
        y: 3,
        drilldown: 'first',
        color: 'rgb(124, 181, 236)'
      }, {
        y: 2,
        drilldown: 'second',
        color: 'rgb(67, 67, 72)'
      }, {
        y: 1,
        drilldown: 'third',
        color: '#90ed7d'
      }]
    }],
    drilldown: commonDrilldown
  });

  chart1 = new Chart({
    chart: {type: 'column',
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
                depth: 45}
        },
    series: [{
      id: 'first-series',
      data: [{
        name: 'A',
        y: 3,
        drilldown: 'first',
        color:'red'
      }, {
        y: 2,
        drilldown: 'second',
        color:'green'
      }, {
        y: 1,
        drilldown: 'third',
        color:'red'
      }]
    }],
    drilldown: commonDrilldown
  });

  chart2 = new Chart({
    chart: {
      type: 'bar',
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
      id: 'first-series',
      data: [{
        name: 'A',
        y: 3,
        drilldown: 'first'
      }, {
        y: 2,
        drilldown: 'second'
      }, {
        y: 1,
        drilldown: 'third'
      }]
    }],
    drilldown: commonDrilldown
  });


/*
function to zoom the graph
*/
zoomContent() {
  this.chart.ref.yAxis[0].setExtremes(0, 0.1) ;
}

/*
function to rest the zoom in graph
*/
resetZoom() {
  this.chart.ref.yAxis[0].setExtremes(null, null);
}

  ngOnInit() {
  }

}
