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
var Rx_1 = require("rxjs/Rx");
var data_service_1 = require("./data.service");
var ViewController = (function () {
    function ViewController(dataService) {
        this.dataService = dataService;
        this.modifiedDataSubject = new Rx_1.Subject();
    }
    ViewController.prototype.getData = function () {
        var _this = this;
        return this.dataService.getData().subscribe(function (data) {
            var modified = _this.modifyData(data);
            _this.modifiedDataSubject.next(modified);
        });
    };
    ViewController.prototype.modifyData = function (data) {
        var randomDataIndex = Math.floor(Math.random() * data.length);
        var modifiedData = new Array();
        var sumOfValues = 0;
        data[randomDataIndex].forEach(function (item) {
            sumOfValues += item.value;
        });
        for (var _i = 0, _a = data[randomDataIndex]; _i < _a.length; _i++) {
            var entry = _a[_i];
            modifiedData.push({
                value: Math.round(entry.value * 100 / sumOfValues),
                description: entry.description
            });
        }
        return modifiedData;
    };
    return ViewController;
}());
ViewController = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [data_service_1.DataService])
], ViewController);
exports.ViewController = ViewController;
//# sourceMappingURL=view-controller.js.map