import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromsuppliersComponent } from './from-suppliers/from-suppliers.component';
import { TocustomersComponent } from './to-customers/to-customers.component';

const routes: Routes = [
  { path: 'fromSuppliers', component: FromsuppliersComponent },
  { path: 'toCustomers', component: TocustomersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
