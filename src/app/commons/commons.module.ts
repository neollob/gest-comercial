import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavbarComponent, NotfoundComponent, HomeComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent, NavbarComponent, NotfoundComponent, HomeComponent]
})
export class CommonsModule { }
