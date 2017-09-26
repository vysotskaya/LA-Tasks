import { Component, OnInit } from '@angular/core';
import { ViewController } from './view-controller';
import { Data } from './data.model';

@Component({
    selector: 'data-rows',
    templateUrl: './data-rows.component.html',
    styleUrls: ['./data-rows.component.css'],
    providers:[ViewController]   
})

export class DataRowsComponent implements OnInit {

    dataRows: Data[];

    constructor(private controller: ViewController){}

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.controller.getData().subscribe(
            data => this.dataRows = this.controller.modifyData(data)
        );
    }

    updateData() {
        this.getData();
    }
}