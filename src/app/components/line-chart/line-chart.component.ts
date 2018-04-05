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
      name: 'Line 1',
      data: [10, 20, 30]
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
      name: 'Delivered amount',
      data: [
          ['Bananas', 8],
          ['Kiwi', 3],
          ['Mixed nuts', 1],
          ['Oranges', 6],
          ['Apples', 8],
          ['Pears', 4],
          ['Clementines', 4],
          ['Reddish (bag)', 1],
          ['Grapes (bunch)', 1]
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
