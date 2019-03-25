import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HotelService} from './services/hotel-service';
import { HotelListComponent } from './modules/hotel/hotel-list/hotel-list.component';

import { from } from 'rxjs';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { LoginComponent } from './modules/login/login.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideMenuComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
