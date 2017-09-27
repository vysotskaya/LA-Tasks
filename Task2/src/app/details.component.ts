import { Data } from './data.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})

export class DetailsComponent {
    @Input() dataDetails: Data;
}