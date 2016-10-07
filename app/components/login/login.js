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
var authentication_1 = require('../../services/autentification/authentication');
var LoginComponent = (function () {
    function LoginComponent(_service) {
        this._service = _service;
        this.user = new authentication_1.User('', '');
        this.errorMsg = '';
    }
    LoginComponent.prototype.login = function () {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            providers: [authentication_1.AuthenticationService],
            templateUrl: './app/components/login/login.html'
        }), 
        __metadata('design:paramtypes', [authentication_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map