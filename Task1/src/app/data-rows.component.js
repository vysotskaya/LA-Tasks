"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var view_controller_1 = require("./view-controller");
var DataRowsComponent = (function () {
    function DataRowsComponent(controller) {
        this.controller = controller;
    }
    DataRowsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    DataRowsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DataRowsComponent.prototype.getData = function () {
        var _this = this;
        this.controller.getData();
        this.sub = this.controller.modifiedDataSubject.subscribe(function (data) { return _this.dataRows = data; });
    };
    DataRowsComponent.prototype.updateData = function () {
        this.getData();
    };
    return DataRowsComponent;
}());
DataRowsComponent = __decorate([
    core_1.Component({
        selector: 'data-rows',
        templateUrl: './data-rows.component.html',
        styleUrls: ['./data-rows.component.css'],
        providers: [view_controller_1.ViewController]
    }),
    __metadata("design:paramtypes", [view_controller_1.ViewController])
], DataRowsComponent);
exports.DataRowsComponent = DataRowsComponent;
//# sourceMappingURL=data-rows.component.js.map