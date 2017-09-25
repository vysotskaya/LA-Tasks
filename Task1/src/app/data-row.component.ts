import { Component, Input } from '@angular/core';
import { Data } from './data.model';

@Component ({
    selector: 'data-row',
    templateUrl: './data-row.component.html',
    styleUrls: ['./data-row.component.css']
})

export class DataRowComponent {
    @Input() data: Data;
}