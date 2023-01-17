import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancierRoutingModule } from './financier-routing.module';
import { FinancierComponent } from './financier.component';
import { HomeFinancierComponent } from './pages/home-financier/home-financier.component';
import { HeaderFinancierComponent } from './partials/header-financier/header-financier.component';
import { NavFinancierComponent } from './partials/nav-financier/nav-financier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/commons/shared.module';


@NgModule({
  declarations: [
    FinancierComponent,
    HomeFinancierComponent,
    HeaderFinancierComponent,
    NavFinancierComponent
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
