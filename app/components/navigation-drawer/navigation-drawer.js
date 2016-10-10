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
var NavDrawerComponent = (function () {
    function NavDrawerComponent() {
        var _this = this;
        this.handleTouchMove = function (event) {
            var diff = parseInt(_this.element.style.left) + parseInt(window.getComputedStyle(_this.element).width);
            var posx = parseInt(event.changedTouches[0].clientX);
            // console.log(`diff - ${diff}`);
            // console.log(`posx - ${posx}`);
            /// onOpening 
            if (_this.touchStartPosX < 50 && posx < _this.element.offsetWidth && _this.isMenuOpen == false && posx > _this.touchStartPosX && parseInt(_this.element.style.left) < 0) {
                _this.element.style.left = "" + (event.changedTouches[0].clientX - _this.element.offsetWidth - _this.touchStartPosX);
                _this.overlay.classList.add('visible');
                _this.overlay.style.opacity = "" + diff / (parseInt(window.getComputedStyle(_this.element).width) * 2);
                console.log(_this.element.style.left);
                console.log("onOpening");
                _this.isTouchWasOnDrawer = true;
            }
            ///onClosing
            if (posx < parseInt(window.getComputedStyle(_this.element).width) + 10 && _this.isMenuOpen && parseInt(_this.element.style.left) <= 0) {
                if (_this.touchStartPosX > parseInt(window.getComputedStyle(_this.element).width)) {
                    console.log("thth");
                    _this.element.style.left = "" + (event.changedTouches[0].clientX - parseInt(window.getComputedStyle(_this.element).width));
                }
                else {
                    _this.element.style.left = "" + (-_this.touchStartPosX + event.changedTouches[0].clientX);
                }
                _this.isTouchWasOnDrawer = true;
            }
            if (parseInt(_this.element.style.left) > 0) {
                _this.element.style.left = '0px';
            }
        };
        this.handleTouchStart = function (event) {
            _this.isTouchWasOnDrawer = false;
            console.log(_this.element);
            _this.element.classList.remove('opened');
            _this.element.classList.remove('closed');
            _this.element.style.transitionDuration = '';
            _this.touchStartPosX = event.changedTouches[0].clientX;
            var diff = parseInt(_this.element.style.left) + parseInt(window.getComputedStyle(_this.element).width);
            var posx = parseInt(event.changedTouches[0].clientX);
            _this.touchStartTime = event.timeStamp;
            if (posx < 20) {
                _this.element.classList.add('touched');
            }
        };
        this.handleTouchEnd = function (event) {
            if (parseInt(_this.element.style.left) > -parseInt(window.getComputedStyle(_this.element).width) / 2) {
                _this.element.style.left = "0px";
                _this.element.classList.add('opened');
                _this.element.classList.remove('closed');
                _this.isMenuOpen = true;
            }
            else {
                _this.element.style.left = "" + -parseInt(window.getComputedStyle(_this.element).width);
                _this.element.classList.remove('opened');
                _this.element.classList.add('closed');
                _this.element.classList.remove('touched');
                _this.overlay.classList.remove('visible');
                _this.isMenuOpen = false;
            }
            var diff = parseInt(_this.element.style.left) + parseInt(window.getComputedStyle(_this.element).width);
            _this.overlay.style.opacity = "" + diff / (parseInt(window.getComputedStyle(_this.element).width) * 2);
            console.log(event.timeStamp - _this.touchStartTime);
            if (_this.touchStartTime + 200 > event.timeStamp && event.changedTouches[0].clientX > _this.touchStartPosX) {
                _this.element.classList.remove('closed');
                _this.element.classList.add('opened');
                _this.element.style.transitionDuration = "0.1s";
                _this.element.style.left = '0px';
                _this.isMenuOpen = true;
            }
            if (_this.touchStartTime + 200 > event.timeStamp && event.changedTouches[0].clientX < _this.touchStartPosX) {
                _this.element.classList.remove('opened');
                _this.element.classList.add('closed');
                console.log('closed event');
                _this.element.style.transitionDuration = "0.1s";
                _this.element.style.left = "" + -parseInt(window.getComputedStyle(_this.element).width);
                _this.isMenuOpen = false;
            }
            if (_this.touchStartPosX > parseInt(window.getComputedStyle(_this.element).width)
                && event.changedTouches[0].clientX > parseInt(window.getComputedStyle(_this.element).width)
                && !_this.isTouchWasOnDrawer) {
                _this.element.style.left = "" + -parseInt(window.getComputedStyle(_this.element).width);
                _this.element.classList.remove('opened');
                _this.element.classList.add('closed');
                _this.element.classList.remove('touched');
                _this.overlay.classList.remove('visible');
                _this.isMenuOpen = false;
            }
        };
        this.element = document.getElementsByClassName('nav-drawer').item(0);
        this.overlay = document.getElementsByClassName('overlay').item(0);
    }
    NavDrawerComponent.prototype.ngOnInit = function () {
        document.addEventListener('touchmove', this.handleTouchMove, false);
        document.addEventListener('touchstart', this.handleTouchStart, false);
        document.addEventListener('touchend', this.handleTouchEnd, false);
    };
    NavDrawerComponent = __decorate([
        core_1.Component({
            selector: 'nav-drawer',
            templateUrl: './app/components/navigation-drawer/navigation-drawer.html',
            styleUrls: ['./app/components/navigation-drawer/navigation-drawer.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [])
    ], NavDrawerComponent);
    return NavDrawerComponent;
}());
exports.NavDrawerComponent = NavDrawerComponent;
//# sourceMappingURL=navigation-drawer.js.map