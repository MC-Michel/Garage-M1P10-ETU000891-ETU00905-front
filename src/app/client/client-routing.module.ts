import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { CurrentRepairClientComponent } from './pages/car/current-repair-client/current-repair-client.component';
import { DefaultRepairClientComponent } from './pages/default-repair-client/default-repair-client.component';
import { HomeClientComponent } from './pages/home-client/home-client.component';
import { RepairsHistoricComponent } from './pages/repairs-historic/repairs-historic.component';

const routes: Routes = [
  {
    path:"",
    component: ClientComponent,
    children:[
      {
        path: "",
        component: HomeClientComponent
      },
      {
        path: "offers",
        component: DefaultRepairClientComponent
      },
      {
        path: "car/current-repair/:id",
        component: CurrentRepairClientComponent
      },
      {
        path: "car/:id/repairs-historic",
        component: RepairsHistoricComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
