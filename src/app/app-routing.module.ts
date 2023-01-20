import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierModule } from './admin/atelier/atelier.module';
import { ClientModule } from './client/client.module';
import { LoginClientComponent } from './client/pages/auth/login-client/login-client.component';
import { SigninClientComponent } from './client/pages/auth/signin-client/signin-client.component';
import { VoitureCreateComponent } from './client/pages/voiture/voiture-create/voiture-create.component';
import { AccessDeniedComponent } from './commons/pages/access-denied/access-denied.component';
import { AuthGuard } from './guards/auth.guard';
import { DragDropComponent } from './test/component/drag-drop/drag-drop.component';
import { HomeComponent } from './test/component/home/home.component';
import { CreateComponent } from './test/component/lesson/create/create.component';
import { ListComponent } from './test/component/lesson/list/list.component';
import { UpdateComponent } from './test/component/lesson/update/update.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path : '', redirectTo : '/user/login', pathMatch : 'full' },
  { path : 'lesson/list', component : ListComponent },
  { path : 'lesson/create', component : CreateComponent},
  { path : 'lesson/update/:name', component : UpdateComponent},
  { path : 'home', component : HomeComponent},
  { path : 'drag-drop', component : DragDropComponent},

  //Client
  { 
    path : 'client', 
    loadChildren: () => import("./client/client.module").then((m) => ClientModule) ,
    //canActivate:[AuthGuard],
    //data: {roleIds: [1]}
  },
  //User
  {
    path: 'user', loadChildren: () => import("./user/user.module").then((m)=> UserModule)
  },
  //Responsable atelier
  { path : 'admin/atelier', loadChildren: ()=> import("./admin/atelier/atelier.module").then((m) => AtelierModule)},
  { path: 'admin/financier', loadChildren: () => import('./admin/financier/financier.module').then(m => m.FinancierModule) },

  {path: 'forbidden', component: AccessDeniedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
