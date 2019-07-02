import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersrequestComponent } from './suppliers-request/suppliers-request.component';
import { SupplierslistComponent } from './suppliers-list/suppliers-list.component';

@NgModule({
  declarations: [SupplierslistComponent, SuppliersrequestComponent],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ],
  exports: [SupplierslistComponent, SuppliersrequestComponent]

})
export class SuppliersModule { }
