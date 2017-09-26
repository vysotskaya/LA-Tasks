import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import { DataService } from './data.service';
import { Data } from './data.model';

@Injectable()
export class ViewController {
    constructor(private dataService: DataService) { }

    modifiedDataSubject: Subject<Data[]> = new Subject<Data[]>();

    getData() {
        return this.dataService.getData().subscribe(
            data => {
                let modified: Data[] = this.modifyData(data);
                this.modifiedDataSubject.next(modified);
            });
    }

    private modifyData(data: Array<Data[]>): Data[] {
        let randomDataIndex = Math.floor(Math.random() * data.length);
        let modifiedData = new Array<Data>();
        let sumOfValues = 0;
        data[randomDataIndex].forEach(
            function(item) {
                sumOfValues += item.value
            }
        );
        for (let entry of data[randomDataIndex]) {
            modifiedData.push({
                value: Math.round(entry.value * 100 / sumOfValues),
                description: entry.description
            });
        }
        return modifiedData;
    }
}