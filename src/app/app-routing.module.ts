import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
// import { CustomerslistComponent } from './customers/customerslist/customerslist.component';
// import { SupplierslistComponent } from './suppliers/supplierslist/supplierslist.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule) },
  { path: 'suppliers', loadChildren: () => import('./suppliers/suppliers.module').then(mod => mod.SuppliersModule) },
  { path: 'storing', loadChildren: () => import('./storing/storing.module').then(mod => mod.StoringModule) },
  { path: 'billing', loadChildren: () => import('./billing/billing.module').then(mod => mod.BillingModule) },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
