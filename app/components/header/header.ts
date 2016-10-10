import { Component, ElementRef, Injectable } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import { HeaderService } from './header.service'
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import 'rxjs/add/operator/map';
 
@Component({
    selector: 'nk-header',
    providers: [HeaderService],
    templateUrl: './app/components/header/header.html',
    styleUrls: ['./app/components/header/header.css']
})
export class HeaderComponent {
    constructor(private hs : HeaderService){}
    ngOnInit() : void {
    this.hs.getName().then(
        (data) => {
            console.log(data)
            data.forEach(element => {
                console.log(element.Title)
            });
        }
        );
  }
}