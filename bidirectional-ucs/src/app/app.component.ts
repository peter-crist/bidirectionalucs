import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public chartData: Array<any>;

  constructor() {}

  ngOnInit() {
    this.createSampleData();
  }

  createSampleData() {
    let chartData = [];
    ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
        "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
        "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
        "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
        "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
        .forEach(function(state){
            let low=Math.round(100*Math.random()),
                mid=Math.round(100*Math.random()),
                high=Math.round(100*Math.random());
            chartData[state]={'low':d3.min([low,mid,high]), 'high':d3.max([low,mid,high]),
                'avg':Math.round((low+mid+high)/3), 'color':d3.interpolate("#28929F", "#28CFEB")(low/100)};
        });
    this.chartData = chartData;
  }
}