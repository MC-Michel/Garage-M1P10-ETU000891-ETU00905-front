import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancierComponent } from './financier.component';
import { CurrentRepairsDetailsComponent } from './pages/current-repairs-details/current-repairs-details.component';
import { ExpensesCreationComponent } from './pages/expenses-creation/expenses-creation.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
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
      {
        path: "expenses",
        component: ExpensesComponent
      },
      {
        path: "expenses/create",
        component: ExpensesCreationComponent
      },
      {
        path: "current_repairs/:id",
        component: CurrentRepairsDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancierRoutingModule { }
