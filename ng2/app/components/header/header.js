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
var core_1 = require('@angular/core');
var header_service_1 = require('./header.service');
require('rxjs/add/operator/map');
var HeaderComponent = (function () {
    function HeaderComponent(hs) {
        this.hs = hs;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.hs.getName().then(function (data) {
            console.log(data);
            data.forEach(function (element) {
                console.log(element.Title);
            });
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'nk-header',
            providers: [header_service_1.HeaderService],
            templateUrl: './app/components/header/header.html'
        }), 
        __metadata('design:paramtypes', [header_service_1.HeaderService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map