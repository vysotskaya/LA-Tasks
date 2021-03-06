"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var motions_component_1 = require("./motions.component");
var motion_table_component_1 = require("./motion-table.component");
var chart_component_1 = require("./chart.component");
var table_data_controller_1 = require("./table-data-controller");
var details_component_1 = require("./details.component");
var modal_dialog_component_1 = require("./modal-dialog.component");
var circle_charts_component_1 = require("./circle-charts.component");
var router_1 = require("@angular/router");
var appRoutes = [
    { path: 'tables', component: motions_component_1.MotionsComponent },
    { path: 'charts', component: circle_charts_component_1.CircleChartsComponent },
    {
        path: '',
        redirectTo: '/tables',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            motions_component_1.MotionsComponent,
            motion_table_component_1.MotionTableComponent,
            chart_component_1.ChartComponent,
            details_component_1.DetailsComponent,
            modal_dialog_component_1.ModalDialogComponent,
            circle_charts_component_1.CircleChartsComponent
        ],
        providers: [table_data_controller_1.TableDataController],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map