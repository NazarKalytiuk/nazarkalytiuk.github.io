import { Component, ElementRef, Injectable } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';


import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class HeaderService {
    private heroesUrl = 'https://api.campus.kpi.ua/Directory/GetFaculties';  // URL to web api
    constructor(private http: Http) { }
    getName() : Promise<any[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().Data as any[])
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}