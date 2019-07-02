import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromsuppliersComponent } from './fromsuppliers/fromsuppliers.component';
import { TocustomersComponent } from './tocustomers/tocustomers.component';

const routes: Routes = [
  { path: 'fromsuppliers', component: FromsuppliersComponent },
  { path: 'tocustomers', component: TocustomersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
