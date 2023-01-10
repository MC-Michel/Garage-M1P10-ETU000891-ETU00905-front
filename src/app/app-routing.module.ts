import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './test/component/lesson/create/create.component';
import { ListComponent } from './test/component/lesson/list/list.component';
import { UpdateComponent } from './test/component/lesson/update/update.component';

const routes: Routes = [
  { path : '', component : ListComponent },
  { path : 'lesson/list', component : ListComponent },
  { path : 'lesson/create', component : CreateComponent},
  { path : 'lesson/update/:name', component : UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
