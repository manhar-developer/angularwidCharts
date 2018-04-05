import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

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
      data:  [
        ['Store A', 8],
        ['Store B', 3],
        ['Store c', 1],
        ['Store D', 6]
    ]
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
