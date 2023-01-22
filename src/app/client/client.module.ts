import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module'; 
import { HeaderClientComponent } from './partials/header-client/header-client.component';
import { NavClientComponent } from './partials/nav-client/nav-client.component';
import { ClientComponent } from './client.component';
import { HomeClientComponent } from './pages/home-client/home-client.component';
import { LoginClientComponent } from './pages/auth/login-client/login-client.component';
import { SigninClientComponent } from './pages/auth/signin-client/signin-client.component';
import { SharedModule } from '../commons/shared.module';
import { CarCreationFormComponent } from './components/car-creation-form/car-creation-form.component';
import { CarUpdateFormComponent } from './components/car-update-form/car-update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentRepairClientComponent } from './pages/car/current-repair-client/current-repair-client.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ 
    HomeClientComponent,
    HeaderClientComponent,
    NavClientComponent,
    ClientComponent,
    LoginClientComponent,
    SigninClientComponent,
    CarCreationFormComponent,
    CarUpdateFormComponent,
    CurrentRepairClientComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule 
  ]
})
export class ClientModule { }
