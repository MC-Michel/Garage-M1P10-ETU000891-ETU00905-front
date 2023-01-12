import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminAtelierComponent } from './admin/atelier/component/home-admin-atelier/home-admin-atelier.component';
import { HomeAdminFinancierComponent } from './admin/financier/component/home-admin-financier/home-admin-financier.component';
import { LoginClientComponent } from './client/component/auth/login-client/login-client.component';
import { SigninClientComponent } from './client/component/auth/signin-client/signin-client.component';
import { HomeClientComponent } from './client/component/home-client/home-client.component';
import { VoitureCreateComponent } from './client/component/voiture/voiture-create/voiture-create.component';
import { DragDropComponent } from './test/component/drag-drop/drag-drop.component';
import { HomeComponent } from './test/component/home/home.component';
import { CreateComponent } from './test/component/lesson/create/create.component';
import { ListComponent } from './test/component/lesson/list/list.component';
import { UpdateComponent } from './test/component/lesson/update/update.component';

const routes: Routes = [
  { path : '', redirectTo : '/client/auth/login', pathMatch : 'full' },
  { path : 'lesson/list', component : ListComponent },
  { path : 'lesson/create', component : CreateComponent},
  { path : 'lesson/update/:name', component : UpdateComponent},
  { path : 'home', component : HomeComponent},
  { path : 'drag-drop', component : DragDropComponent},
  { path : 'client', component : HomeClientComponent},
  { path : 'client/voiture/create', component : VoitureCreateComponent},
  { path : 'client/auth/login', component : LoginClientComponent},
  { path : 'client/auth/signin', component : SigninClientComponent},
  { path : 'atelier', component : HomeAdminAtelierComponent},
  { path : 'financier', component : HomeAdminFinancierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
