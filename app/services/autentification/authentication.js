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
var router_1 = require('@angular/router');
var User = (function () {
    function User(Login, Password) {
        this.Login = Login;
        this.Password = Password;
    }
    return User;
}());
exports.User = User;
var users = [
    new User('admin@admin.com', 'adm9'),
    new User('user1@gmail.com', 'a23')
];
var AuthenticationService = (function () {
    function AuthenticationService(_router) {
        this._router = _router;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("user");
        this._router.navigate(['login']);
    };
    AuthenticationService.prototype.login = function (user) {
        var authenticatedUser = users.find(function (u) { return u.Login === user.Login; });
        if (authenticatedUser && authenticatedUser.Password === user.Password) {
            localStorage.setItem("user", authenticatedUser.toString());
            this._router.navigate(['']);
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['']);
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.js.map