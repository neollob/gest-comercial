import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierslistComponent } from './suppliers-list/suppliers-list.component';
import { SuppliersrequestComponent } from './suppliers-request/suppliers-request.component';

const routes: Routes = [{
  path: '',
  component: SupplierslistComponent
}, {
  path: 'supplier_detail/:id',
  component: SuppliersrequestComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
