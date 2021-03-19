import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/layout/landing/landing.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, LandingComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [HeaderComponent,FooterComponent, LandingComponent],
})
export class CoreModule { }
