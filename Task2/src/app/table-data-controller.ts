import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TableDataController  {
     constructor(private http: Http){}

     loadData(): Observable<any> {
         return this.http.get('app/data.json')
         .map(
             (response: Response) => response.json()
         );
     }
}
