import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'hotels', loadChildren: "./modules/hotel/hotel.module#HotelModule" },
  { path: 'contracts', loadChildren: "./modules/contract/contract.module#ContractModule" },
  { path: 'search', loadChildren: "./modules/search/search.module#SearchModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
