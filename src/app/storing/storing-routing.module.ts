import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoringlistComponent } from './storing-list/storing-list.component';
import { StoringincomingComponent } from './storing-incoming/storing-incoming.component';
import { StoringoutgoingComponent } from './storing-outgoing/storing-outgoing.component';

const routes: Routes = [
  { path: '', component: StoringlistComponent },
  { path: 'in', component: StoringincomingComponent },
  { path: 'out', component: StoringoutgoingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoringRoutingModule { }
