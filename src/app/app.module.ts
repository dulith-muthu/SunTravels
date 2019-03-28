import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HotelService} from './services/hotel-service';


import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { LoginComponent } from './modules/login/login.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideMenuComponent,
    LoginComponent
    // NgbModule
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
