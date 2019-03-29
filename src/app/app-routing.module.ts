import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'hotels', loadChildren: "./modules/hotel/hotel.module#HotelModule", canActivate: [AuthGuard] },
  { path: 'contracts', loadChildren: "./modules/contract/contract.module#ContractModule", canActivate: [AuthGuard] },
  { path: 'search', loadChildren: "./modules/search/search.module#SearchModule", canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: "/hotels" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
