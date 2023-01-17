import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent } from './atelier.component';
import { HomeAtelierComponent } from './pages/home-atelier/home-atelier.component';
import { ReceptionAtelierComponent } from './pages/reception-atelier/reception-atelier.component';


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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtelierRoutingModule { }
