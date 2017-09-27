import { Data } from './data.model';
import { TableData } from './table-data.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'motion-table',
  templateUrl: './motion-table.component.html',
  styleUrls: ['./motion-table.component.css']
})

export class MotionTableComponent  {
    @Input() tableData: TableData;
    @Output() dataForDetailsEvent = new EventEmitter();

    showDetails(data: Data): void {
        this.dataForDetailsEvent.emit(data);
    }
}
