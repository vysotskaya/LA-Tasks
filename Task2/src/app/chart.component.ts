import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnChanges  {

    @Input() chartValue: number;

    styleObject = {
        background: ""
    }

    ngOnChanges(): void {
        let whiteValue = 100 - this.chartValue;
        let gradientValue = this.chartValue > 50 
            ? "linear-gradient(to right, #7ac " + this.chartValue + "%, #fff " + whiteValue + "%)"
            : "linear-gradient(to left, #fff " + whiteValue + "%, #7ac " + this.chartValue + "%)";
        this.styleObject.background = gradientValue;
    }
 }
