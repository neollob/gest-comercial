import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { FromsuppliersComponent } from './from-suppliers/from-suppliers.component';
import { TocustomersComponent } from './to-customers/to-customers.component';

@NgModule({
  declarations: [FromsuppliersComponent, TocustomersComponent],
  imports: [
    CommonModule,
    BillingRoutingModule
  ],
  exports: [FromsuppliersComponent, TocustomersComponent]
})
export class BillingModule { }
