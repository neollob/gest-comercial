import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [HomeComponent, HeaderComponent, NavbarComponent, FooterComponent, NotfoundComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports: [HomeComponent, HeaderComponent, NavbarComponent, FooterComponent, NotfoundComponent]
})
export class CommonsModule { }
