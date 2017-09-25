import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Injectable()
export class ViewController {
    constructor(private dataService: DataService) { }

    getModifiedData(): any {
        let recievedData = [];
        this.dataService.getData().subscribe(data => recievedData = data);
        return {value: 6, description: 'qwerty'};
    }
}