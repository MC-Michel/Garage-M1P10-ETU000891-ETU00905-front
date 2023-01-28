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
import { DefaultRepairComponent } from './pages/default-repair/default-repair.component';
import { DefaultRepairCreationFormComponent } from './component/default-repair-creation-form/default-repair-creation-form.component';
import { DefaultRepairUpdateFormComponent } from './component/default-repair-update-form/default-repair-update-form.component';
import { DefaultRepairPopupComponent } from './component/default-repair-popup/default-repair-popup.component';
import { RepairsHistoricAtelierComponent } from './pages/repairs-historic-atelier/repairs-historic-atelier.component';
 


@NgModule({
  declarations: [
    AtelierComponent,
    HomeAtelierComponent,
    HeaderAtelierComponent,
    NavAtelierComponent,
    ReceptionAtelierComponent,
    ReparationAtelierComponent,
    ReparationDetailAtelierComponent,
    DefaultRepairComponent,
    DefaultRepairCreationFormComponent,
    DefaultRepairUpdateFormComponent,
    DefaultRepairPopupComponent,
    RepairsHistoricAtelierComponent, 
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
