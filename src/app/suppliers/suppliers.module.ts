import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersrequestComponent } from './suppliersrequest/suppliersrequest.component';
import { SupplierslistComponent } from './supplierslist/supplierslist.component';

@NgModule({
  declarations: [SupplierslistComponent,SuppliersrequestComponent],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ],
  exports: [SupplierslistComponent,SuppliersrequestComponent]

})
export class SuppliersModule { }
