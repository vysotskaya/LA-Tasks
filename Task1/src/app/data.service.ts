import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    constructor(private http: Http) { }

    getData() {
        var temp = this.http.get('app/data.json')
            .map((res: Response) => res.json())
        return temp;
    }
}