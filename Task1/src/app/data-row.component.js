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
var DataRowComponent = (function () {
    function DataRowComponent() {
        this.styleObject = {
            background: "",
            width: '600px',
            height: '10px',
            border: 'solid 1px black'
        };
    }
    DataRowComponent.prototype.ngOnChanges = function () {
        this.updateStyle();
    };
    DataRowComponent.prototype.updateStyle = function () {
        if (!this.data) {
            return;
        }
        var whiteValue = 100 - this.data.value;
        var gradientValue = this.data.value > 50
            ? "linear-gradient(to right, #7ac " + this.data.value + "%, #fff " + whiteValue + "%)"
            : "linear-gradient(to left, #fff " + whiteValue + "%, #7ac " + this.data.value + "%)";
        this.styleObject.background = gradientValue;
    };
    return DataRowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataRowComponent.prototype, "data", void 0);
DataRowComponent = __decorate([
    core_1.Component({
        selector: 'data-row',
        templateUrl: './data-row.component.html',
        styleUrls: ['./data-row.component.css']
    })
], DataRowComponent);
exports.DataRowComponent = DataRowComponent;
//# sourceMappingURL=data-row.component.js.map