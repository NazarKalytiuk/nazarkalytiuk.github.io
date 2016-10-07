import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http'
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './services/http/in-memory-data';
import { HeaderService }  from './components/header/header.service';
import { AppComponent }   from './components/app/app';
import { LoginComponent }   from './components/login/login';
import { HeaderComponent }   from './components/header/header';
import { NavDrawerComponent } from './components/navigation-drawer/navigation-drawer';
import { OverlayComponent } from './components/overlay/overlay';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { routing } from './components/app/app.routing';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, MdButtonModule, MdCardModule, FormsModule, HttpModule, InMemoryWebApiModule, routing ],
  declarations: [ AppComponent, LoginComponent, HeaderComponent, HeaderComponent, OverlayComponent, NavDrawerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }