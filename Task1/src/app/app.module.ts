import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { DataRowComponent } from './data-row.component';
import { DataRowsComponent } from './data-rows.component';
import { DataService } from './data.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    DataRowComponent,
    DataRowsComponent
  ],
  providers: [
    DataService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
