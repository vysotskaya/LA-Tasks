import { Data } from './data.model';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  dataDetails: Data;

  showModal(data: Data) {
    this.dataDetails = data;
  }
}
