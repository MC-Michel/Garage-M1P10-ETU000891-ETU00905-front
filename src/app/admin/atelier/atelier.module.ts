import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtelierRoutingModule } from './atelier-routing.module';
import { AtelierComponent } from './atelier.component';
import { HomeAtelierComponent } from './pages/home-atelier/home-atelier.component';
import { HeaderAtelierComponent } from './partials/header-atelier/header-atelier.component';
import { NavAtelierComponent } from './partials/nav-atelier/nav-atelier.component';
import { SharedModule } from 'src/app/commons/shared.module';


@NgModule({
  declarations: [
    AtelierComponent,
    HomeAtelierComponent,
    HeaderAtelierComponent,
    NavAtelierComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AtelierRoutingModule
  ]
})
export class AtelierModule { }
