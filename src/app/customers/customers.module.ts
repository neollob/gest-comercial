import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersdataComponent } from './customersdata/customersdata.component';
import { CustomerslistComponent } from './customerslist/customerslist.component';

@NgModule({
  declarations: [CustomersdataComponent,CustomerslistComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  exports: [CustomersdataComponent,CustomerslistComponent]
})
export class CustomersModule { }
