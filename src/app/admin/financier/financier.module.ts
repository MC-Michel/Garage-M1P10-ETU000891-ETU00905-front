import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancierRoutingModule } from './financier-routing.module';
import { FinancierComponent } from './financier.component';
import { HomeFinancierComponent } from './pages/home-financier/home-financier.component';
import { HeaderFinancierComponent } from './partials/header-financier/header-financier.component';
import { NavFinancierComponent } from './partials/nav-financier/nav-financier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/commons/shared.module';
import { CurrentRepairsDetailsComponent } from './pages/current-repairs-details/current-repairs-details.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { ExpensesCreationComponent } from './pages/expenses-creation/expenses-creation.component';
import { RepairsHistoricFinancierComponent } from './pages/repairs-historic-financier/repairs-historic-financier.component';


@NgModule({
  declarations: [
    FinancierComponent,
    HomeFinancierComponent,
    HeaderFinancierComponent,
    NavFinancierComponent,
    CurrentRepairsDetailsComponent,
    ExpensesComponent,
    ExpensesCreationComponent,
    RepairsHistoricFinancierComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FinancierRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FinancierModule { }
