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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var app_1 = require('./components/app/app');
var login_1 = require('./components/login/login');
var header_1 = require('./components/header/header');
var navigation_drawer_1 = require('./components/navigation-drawer/navigation-drawer');
var overlay_1 = require('./components/overlay/overlay');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var app_routing_1 = require('./components/app/app.routing');
var forms_1 = require('@angular/forms');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, button_1.MdButtonModule, card_1.MdCardModule, forms_1.FormsModule, http_1.HttpModule, angular2_in_memory_web_api_1.InMemoryWebApiModule, app_routing_1.routing],
            declarations: [app_1.AppComponent, login_1.LoginComponent, header_1.HeaderComponent, header_1.HeaderComponent, overlay_1.OverlayComponent, navigation_drawer_1.NavDrawerComponent],
            bootstrap: [app_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map