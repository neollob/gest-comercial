import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierslistComponent } from './supplierslist/supplierslist.component';
import { SuppliersrequestComponent } from './suppliersrequest/suppliersrequest.component';

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
