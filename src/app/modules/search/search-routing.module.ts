import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchGeneralComponent } from './search-general/search-general.component';

const routes: Routes = [
  { path: '', component: SearchGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
