import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerdataComponent } from './customer-data/customer-data.component';
import { CustomerslistComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [CustomerdataComponent, CustomerslistComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  exports: [CustomerdataComponent, CustomerslistComponent]
})
export class CustomersModule { }
