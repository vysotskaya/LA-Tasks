import { Data } from './data.model';
import { TableDataController } from './table-data-controller';
import { TableData } from './table-data.model';
import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'motions',
  templateUrl: './motions.component.html'
})

export class MotionsComponent implements OnInit, OnDestroy  { 
    tablesData: TableData[];
    private subscriptionObject: Subscription;
    dataDetails: Data;

    @Output('dataForModalWindow') dataForDelailsEvent: EventEmitter<Data> = new EventEmitter<Data>();

    constructor(private controller: TableDataController){}
    
    ngOnInit(): void {
        this.getTablesData();
    }

    getTablesData(): void {
        this.subscriptionObject = this.controller.loadData()
            .subscribe(
                data => this.tablesData = data
            )
    }

    handleDetails(data: Data): void {
        this.dataForDelailsEvent.emit(data);
    }

    ngOnDestroy(): void {
        this.subscriptionObject.unsubscribe();
    }
}
