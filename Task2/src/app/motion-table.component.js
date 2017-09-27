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
var MotionTableComponent = (function () {
    function MotionTableComponent() {
        this.dataForDetailsEvent = new core_1.EventEmitter();
    }
    MotionTableComponent.prototype.showDetails = function (data) {
        this.dataForDetailsEvent.emit(data);
    };
    return MotionTableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MotionTableComponent.prototype, "tableData", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MotionTableComponent.prototype, "dataForDetailsEvent", void 0);
MotionTableComponent = __decorate([
    core_1.Component({
        selector: 'motion-table',
        templateUrl: './motion-table.component.html',
        styleUrls: ['./motion-table.component.css']
    })
], MotionTableComponent);
exports.MotionTableComponent = MotionTableComponent;
//# sourceMappingURL=motion-table.component.js.map