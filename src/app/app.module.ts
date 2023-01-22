import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateComponent } from './test/component/lesson/create/create.component';
import { UpdateComponent } from './test/component/lesson/update/update.component';
import { ListComponent } from './test/component/lesson/list/list.component';
import { HomeComponent } from './test/component/home/home.component';
import { LoginClientComponent } from './client/pages/auth/login-client/login-client.component';
import { SigninClientComponent } from './client/pages/auth/signin-client/signin-client.component';
import { DragDropComponent } from './test/component/drag-drop/drag-drop.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { SharedModule } from './commons/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    HomeComponent,
    DragDropComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    DragDropModule,
    CKEditorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
