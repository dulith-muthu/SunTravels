import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelRoomTypeComponent } from './hotel-room-type/hotel-room-type.component';


const routes: Routes = [
  { path: '', component: HotelListComponent},
  { path: 'add', component: HotelAddComponent},
  { path: 'room-type', component: HotelRoomTypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }