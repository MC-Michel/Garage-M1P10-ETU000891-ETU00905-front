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
import { ReparationDetailAtelierComponent } from './pages/reparation-detail-atelier/reparation-detail-atelier.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AtelierComponent,
    HomeAtelierComponent,
    HeaderAtelierComponent,
    NavAtelierComponent,
    ReceptionAtelierComponent,
    ReparationAtelierComponent,
    ReparationDetailAtelierComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AtelierRoutingModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule
  ]
})
export class AtelierModule { }
