import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerdataComponent } from './customerdata/customerdata.component';
import { CustomerslistComponent } from './customerslist/customerslist.component';

@NgModule({
  declarations: [CustomerdataComponent,CustomerslistComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  exports: [CustomerdataComponent,CustomerslistComponent]
})
export class CustomersModule { }
