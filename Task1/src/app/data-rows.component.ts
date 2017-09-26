import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewController } from './view-controller';
import { Data } from './data.model';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'data-rows',
    templateUrl: './data-rows.component.html',
    styleUrls: ['./data-rows.component.css'],
    providers:[ViewController]   
})

export class DataRowsComponent implements OnInit, OnDestroy {

    dataRows: Data[];
    private sub: Subscription;

    constructor(private controller: ViewController){}

    ngOnInit(): void {
        this.getData();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getData() {
        this.controller.getData();
        this.sub = this.controller.modifiedDataSubject.subscribe(data => this.dataRows = data);
    }

    updateData() {
        this.getData();
    }
}