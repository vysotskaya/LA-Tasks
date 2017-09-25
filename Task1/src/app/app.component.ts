import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>{{title}}</h3>
    <hr>
    <data-rows></data-rows>
  `,
})
export class AppComponent  { 
  title = 'Representation';
}
