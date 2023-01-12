import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module'; 
import { HeaderClientComponent } from './partials/header-client/header-client.component';
import { NavClientComponent } from './partials/nav-client/nav-client.component';
import { ClientComponent } from './client.component';
import { HomeClientComponent } from './pages/home-client/home-client.component';
import { LoginClientComponent } from './pages/auth/login-client/login-client.component';
import { SigninClientComponent } from './pages/auth/signin-client/signin-client.component';
import { SharedModule } from '../common/shared.module';
import { VoitureCreateComponent } from './pages/voiture/voiture-create/voiture-create.component';

@NgModule({
  declarations: [ 
    HomeClientComponent,
    HeaderClientComponent,
    NavClientComponent,
    ClientComponent,
    LoginClientComponent,
    SigninClientComponent,
    VoitureCreateComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
