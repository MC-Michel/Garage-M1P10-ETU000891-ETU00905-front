import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtelierRoutingModule } from './atelier-routing.module';
import { AtelierComponent } from './atelier.component';
import { HomeAtelierComponent } from './pages/home-atelier/home-atelier.component';
import { HeaderAtelierComponent } from './partials/header-atelier/header-atelier.component';
import { NavAtelierComponent } from './partials/nav-atelier/nav-atelier.component';
import { SharedModule } from 'src/app/commons/shared.module';
import { ReceptionAtelierComponent } from './pages/reception-atelier/reception-atelier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReparationAtelierComponent } from './pages/reparation-atelier/reparation-atelier.component';


@NgModule({
  declarations: [
    AtelierComponent,
    HomeAtelierComponent,
    HeaderAtelierComponent,
    NavAtelierComponent,
    ReceptionAtelierComponent,
    ReparationAtelierComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AtelierRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AtelierModule { }
