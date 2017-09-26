import { Component, Input, OnChanges } from '@angular/core';
import { Data } from './data.model';

@Component ({
    selector: 'data-row',
    templateUrl: './data-row.component.html',
    styleUrls: ['./data-row.component.css']
})

export class DataRowComponent implements OnChanges {

    @Input() data: Data;
    styleObject = {
        background: "",
        width:'600px',
        height:'10px',
        border: 'solid 1px black'
    };

    ngOnChanges(): void {
        this.updateStyle();
    }

    updateStyle() {
        if(this.data){
            let whiteValue = 100 - this.data.value;
            let gradientValue = this.data.value > 50 
                ? "linear-gradient(to right, #7ac " + this.data.value + "%, #fff " + whiteValue + "%)"
                : "linear-gradient(to left, #fff " + whiteValue + "%, #7ac " + this.data.value + "%)";
            this.styleObject.background = gradientValue;
        }        
    }
}
