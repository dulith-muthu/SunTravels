import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'hotels', loadChildren: "./modules/hotel/hotel.module#HotelModule" },
  { path: 'contracts', loadChildren: "./modules/contract/contract.module#ContractModule" },
  { path: 'search', loadChildren: "./modules/search/search.module#SearchModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
