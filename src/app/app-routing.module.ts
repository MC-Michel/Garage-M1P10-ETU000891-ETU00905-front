import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminAtelierComponent } from './admin/atelier/component/home-admin-atelier/home-admin-atelier.component';
import { HomeAdminFinancierComponent } from './admin/financier/component/home-admin-financier/home-admin-financier.component';
import { HomeClientComponent } from './client/component/home-client/home-client.component';
import { HomeComponent } from './test/component/home/home.component';
import { CreateComponent } from './test/component/lesson/create/create.component';
import { ListComponent } from './test/component/lesson/list/list.component';
import { UpdateComponent } from './test/component/lesson/update/update.component';

const routes: Routes = [
  { path : '', component : ListComponent },
  { path : 'lesson/list', component : ListComponent },
  { path : 'lesson/create', component : CreateComponent},
  { path : 'lesson/update/:name', component : UpdateComponent},
  { path : 'home', component : HomeComponent},
  { path : 'client', component : HomeClientComponent},
  { path : 'atelier', component : HomeAdminAtelierComponent},
  { path : 'financier', component : HomeAdminFinancierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
