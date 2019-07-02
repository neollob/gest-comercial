import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerslistComponent } from './customerslist/customerslist.component';
import { CustomersdataComponent } from './customersdata/customersdata.component';

const routes: Routes = [
  {
  path:'',
  component:CustomerslistComponent
  },{
  path:'customer_detail/:id',
  component:CustomersdataComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
