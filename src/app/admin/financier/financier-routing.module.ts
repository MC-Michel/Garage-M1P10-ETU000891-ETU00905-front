import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancierComponent } from './financier.component';
import { HomeFinancierComponent } from './pages/home-financier/home-financier.component';

const routes: Routes = [
  {
    path:"",
    component: FinancierComponent,
    children:[
      {
        path: "",
        component: HomeFinancierComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancierRoutingModule { }
