import { Component } from '@angular/core';
import { OverlayComponent } from '../../components/overlay/overlay'

@Component({
    selector: 'nav-drawer',
    templateUrl: './app/components/navigation-drawer/navigation-drawer.html',
    styleUrls: ['./app/components/navigation-drawer/navigation-drawer.css'],
})
//TODO
// відмінить скрол сторінки якшо відкрите
// відмінить скрол якшо не до кінця відкрите
export class NavDrawerComponent {
    element: HTMLElement;
    overlay: HTMLElement;
    constructor() {
        this.element = document.getElementsByClassName('nav-drawer').item(0) as HTMLElement;
        this.overlay = document.getElementsByClassName('overlay').item(0) as HTMLElement;
    }
    ngOnInit() {
        document.addEventListener('touchmove', this.handleTouchMove, false);
        document.addEventListener('touchstart', this.handleTouchStart, false);
        document.addEventListener('touchend', this.handleTouchEnd, false);
    }
    handleTouchMove = (event) => {
        let diff = parseInt(this.element.style.left) + parseInt(window.getComputedStyle(this.element).width);
        let posx = parseInt(event.changedTouches[0].clientX);
        // console.log(`diff - ${diff}`);
        // console.log(`posx - ${posx}`);
        /// onOpening 
        if (this.touchStartPosX < 50 && posx < this.element.offsetWidth && this.isMenuOpen == false && posx > this.touchStartPosX && parseInt(this.element.style.left) < 0) {
            this.element.style.left = `${event.changedTouches[0].clientX - this.element.offsetWidth - this.touchStartPosX}`;
            this.overlay.classList.add('visible');
            this.overlay.style.opacity = `${diff / (parseInt(window.getComputedStyle(this.element).width) * 2)}`;
            console.log(this.element.style.left)
            console.log(`onOpening`)
            this.isTouchWasOnDrawer = true;
        }
        ///onClosing
        if (posx < parseInt(window.getComputedStyle(this.element).width) + 10 && this.isMenuOpen && parseInt(this.element.style.left) <= 0) {
            if (this.touchStartPosX > parseInt(window.getComputedStyle(this.element).width)) {
                console.log("thth")
                this.element.style.left = `${event.changedTouches[0].clientX - parseInt(window.getComputedStyle(this.element).width)}`;
            }
            else {
                this.element.style.left = `${-this.touchStartPosX + event.changedTouches[0].clientX}`;
            }
            this.isTouchWasOnDrawer = true;
        }
        if (parseInt(this.element.style.left) > 0) {
            this.element.style.left = '0px';
        }
    }
    touchStartTime: number;
    touchStartPosX: number;
    isMenuOpen: boolean;
    isTouchWasOnDrawer : boolean;
    handleTouchStart = (event) => {
        this.isTouchWasOnDrawer = false;
        console.log(this.element);
        this.element.classList.remove('opened');
        this.element.classList.remove('closed');
        this.element.style.transitionDuration = '';
        this.touchStartPosX = event.changedTouches[0].clientX;
        let diff = parseInt(this.element.style.left) + parseInt(window.getComputedStyle(this.element).width);
        let posx = parseInt(event.changedTouches[0].clientX);
        this.touchStartTime = event.timeStamp;
        if (posx < 20) {
            this.element.classList.add('touched');
        }
    }
    handleTouchEnd = (event) => {
        if (parseInt(this.element.style.left) > -parseInt(window.getComputedStyle(this.element).width) / 2) {
            this.element.style.left = `0px`;
            this.element.classList.add('opened');
            this.element.classList.remove('closed');
            this.isMenuOpen = true;
        }
        else {
            this.element.style.left = `${-parseInt(window.getComputedStyle(this.element).width)}`;
            this.element.classList.remove('opened');
            this.element.classList.add('closed');
            this.element.classList.remove('touched');
            this.overlay.classList.remove('visible');
            this.isMenuOpen = false;
        }
        let diff = parseInt(this.element.style.left) + parseInt(window.getComputedStyle(this.element).width);
        this.overlay.style.opacity = `${diff / (parseInt(window.getComputedStyle(this.element).width) * 2)}`;
        console.log(event.timeStamp - this.touchStartTime)
        if (this.touchStartTime + 100 > event.timeStamp && event.changedTouches[0].clientX > this.touchStartPosX) {
            this.element.classList.remove('closed');
            this.element.classList.add('opened');
            this.element.style.transitionDuration = `0.1s`
            this.element.style.left = '0px';
            this.isMenuOpen = true;
        }
        if (this.touchStartTime + 100 > event.timeStamp && event.changedTouches[0].clientX < this.touchStartPosX) {
            this.element.classList.remove('opened');
            this.element.classList.add('closed');
            console.log('closed event')
            this.element.style.transitionDuration = `0.1s`
            this.element.style.left = `${-parseInt(window.getComputedStyle(this.element).width)}`;
            this.isMenuOpen = false;
        }
        if(this.touchStartPosX > parseInt(window.getComputedStyle(this.element).width)
                && event.changedTouches[0].clientX > parseInt(window.getComputedStyle(this.element).width)
                && !this.isTouchWasOnDrawer) {
            this.element.style.left = `${-parseInt(window.getComputedStyle(this.element).width)}`;
            this.element.classList.remove('opened');
            this.element.classList.add('closed');
            this.element.classList.remove('touched');
            this.overlay.classList.remove('visible');
            this.isMenuOpen = false;
        }
    }
}