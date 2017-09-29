import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MotionsComponent } from './motions.component';
import { MotionTableComponent } from './motion-table.component';
import { ChartComponent } from './chart.component';
import { TableDataController } from './table-data-controller';
import { DetailsComponent } from './details.component';
import { ModalDialogComponent } from './modal-dialog.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    MotionsComponent,
    MotionTableComponent,
    ChartComponent,
    DetailsComponent,
    ModalDialogComponent 
  ],
  providers:[ TableDataController ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
