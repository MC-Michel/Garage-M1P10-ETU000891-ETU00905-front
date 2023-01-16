import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent } from './atelier.component';
import { HomeAtelierComponent } from './pages/home-atelier/home-atelier.component';


const routes: Routes = [
  {
    path:"",
    component: AtelierComponent,
    children:[
      {
        path: "",
        component: HomeAtelierComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtelierRoutingModule { }
