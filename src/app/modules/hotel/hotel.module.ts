import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsRoutingModule } from './hotel-routing.module';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelRoomTypeComponent } from './hotel-room-type/hotel-room-type.component';

@NgModule({
  declarations: [
    HotelListComponent,
    HotelAddComponent,
    HotelRoomTypeComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelModule { }
