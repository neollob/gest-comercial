import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerslistComponent } from './customers-list/customers-list.component';
import { CustomerdataComponent } from './customer-data/customer-data.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerslistComponent
  }, {
    path: 'customer_detail/:id',
    component: CustomerdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
