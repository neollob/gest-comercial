import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { HomeComponent } from './commons/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'customer', component:CustomerListComponent},
  {path: 'storing',
   /* loadChildren: './storing/storing.module#StoringModule' */
   loadChildren: () => import('./storing/storing.module').then(mod => mod.StoringModule)
  },
  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
