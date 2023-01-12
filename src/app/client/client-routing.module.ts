import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeClientComponent } from './pages/home-client/home-client.component';

const routes: Routes = [
  {
    path:"",
    component: ClientComponent,
    children:[
      {
        path: "",
        component: HomeClientComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
