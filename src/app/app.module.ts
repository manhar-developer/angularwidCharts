import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule , HIGHCHARTS_MODULES} from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src.js';

import { AppComponent } from './app.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ more,exporting ];
}

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
