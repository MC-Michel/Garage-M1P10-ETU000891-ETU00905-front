import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent } from './atelier.component';
import { DefaultRepairComponent } from './pages/default-repair/default-repair.component';
import { HomeAtelierComponent } from './pages/home-atelier/home-atelier.component';
import { ReceptionAtelierComponent } from './pages/reception-atelier/reception-atelier.component';
import { RepairsHistoricAtelierComponent } from './pages/repairs-historic-atelier/repairs-historic-atelier.component';
import { ReparationAtelierComponent } from './pages/reparation-atelier/reparation-atelier.component';
import { ReparationDetailAtelierComponent } from './pages/reparation-detail-atelier/reparation-detail-atelier.component';
import { StatsComponent } from '../financier/pages/stats/stats.component';


const routes: Routes = [
  {
    path:"",
    component: AtelierComponent,
    children:[
      {
        path: "",
        component: HomeAtelierComponent
      },
      {
        path: "reception/:id",
        component: ReceptionAtelierComponent
      },
      {
        path: "reparation",
        component: ReparationAtelierComponent
      },
      {
        path: "historic",
        component: RepairsHistoricAtelierComponent
      },
      {
        path: "reparation/:id",
        component: ReparationDetailAtelierComponent
      },
      {
        path: "settings/default-repair",
        component: DefaultRepairComponent
      },
       {
        path: "stats",
        component: StatsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtelierRoutingModule { }
