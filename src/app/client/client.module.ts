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
import { VoitureCreateComponent } from './pages/voiture/voiture-create/voiture-create.component';
import { CarCreationFormComponent } from './components/car-creation-form/car-creation-form.component';
import { CarUpdateFormComponent } from './components/car-update-form/car-update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    HomeClientComponent,
    HeaderClientComponent,
    NavClientComponent,
    ClientComponent,
    LoginClientComponent,
    SigninClientComponent,
    VoitureCreateComponent,
    CarCreationFormComponent,
    CarUpdateFormComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class ClientModule { }
