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
var table_data_controller_1 = require("./table-data-controller");
var core_1 = require("@angular/core");
var MotionsComponent = (function () {
    function MotionsComponent(controller) {
        this.controller = controller;
        this.dataForDelailsEvent = new core_1.EventEmitter();
    }
    MotionsComponent.prototype.ngOnInit = function () {
        this.getTablesData();
    };
    MotionsComponent.prototype.getTablesData = function () {
        var _this = this;
        this.subscriptionObject = this.controller.loadData()
            .subscribe(function (data) { return _this.tablesData = data; });
    };
    MotionsComponent.prototype.handleDetails = function (data) {
        this.dataForDelailsEvent.emit(data);
    };
    MotionsComponent.prototype.ngOnDestroy = function () {
        this.subscriptionObject.unsubscribe();
    };
    return MotionsComponent;
}());
__decorate([
    core_1.Output('dataForModalWindow'),
    __metadata("design:type", core_1.EventEmitter)
], MotionsComponent.prototype, "dataForDelailsEvent", void 0);
MotionsComponent = __decorate([
    core_1.Component({
        selector: 'motions',
        templateUrl: './motions.component.html'
    }),
    __metadata("design:paramtypes", [table_data_controller_1.TableDataController])
], MotionsComponent);
exports.MotionsComponent = MotionsComponent;
//# sourceMappingURL=motions.component.js.map