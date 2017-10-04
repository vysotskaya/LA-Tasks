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
import { CircleChartsComponent } from './circle-charts.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'tables', component: MotionsComponent },
  { path: 'charts', component: CircleChartsComponent },
  {
    path: '',
    redirectTo: '/tables',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    AppComponent,
    MotionsComponent,
    MotionTableComponent,
    ChartComponent,
    DetailsComponent,
    ModalDialogComponent,
    CircleChartsComponent 
  ],
  providers:[ TableDataController ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
