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
import { FooterComponent } from './commons/partials/footer/footer.component';
import { HomeClientComponent } from './client/pages/home-client/home-client.component';
import { HeaderClientComponent } from './client/partials/header-client/header-client.component';
import { NavClientComponent } from './client/partials/nav-client/nav-client.component';
import { NavAdminFinancierComponent } from './admin/financier/partials/nav-admin-financier/nav-admin-financier.component';
import { HeaderAdminFinancierComponent } from './admin/financier/partials/header-admin-financier/header-admin-financier.component';
import { HomeAdminFinancierComponent } from './admin/financier/component/home-admin-financier/home-admin-financier.component';
import { LoginClientComponent } from './client/pages/auth/login-client/login-client.component';
import { SigninClientComponent } from './client/pages/auth/signin-client/signin-client.component';
import { DragDropComponent } from './test/component/drag-drop/drag-drop.component';
import { VoitureCreateComponent } from './client/pages/voiture/voiture-create/voiture-create.component';
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
    NavAdminFinancierComponent,
    HeaderAdminFinancierComponent,
    HomeAdminFinancierComponent,
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
