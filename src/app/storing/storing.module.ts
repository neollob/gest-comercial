import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoringRoutingModule } from './storing-routing.module';
import { StoringlistComponent } from './storing-list/storing-list.component';
import { StoringincomingComponent } from './storing-incoming/storing-incoming.component';
import { StoringoutgoingComponent } from './storing-outgoing/storing-outgoing.component';

@NgModule({
  declarations: [StoringlistComponent,StoringincomingComponent, StoringoutgoingComponent],
  imports: [
    CommonModule,
    StoringRoutingModule
  ],
  exports: [StoringlistComponent,StoringincomingComponent, StoringoutgoingComponent]
})
export class StoringModule { }
