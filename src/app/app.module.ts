import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateComponent } from './test/component/lesson/create/create.component';
import { UpdateComponent } from './test/component/lesson/update/update.component';
import { ListComponent } from './test/component/lesson/list/list.component';
import { HomeComponent } from './test/component/home/home.component';
import { FooterComponent } from './common/partials/footer/footer.component';
import { HomeClientComponent } from './client/component/home-client/home-client.component';
import { HeaderClientComponent } from './client/partials/header-client/header-client.component';
import { NavClientComponent } from './client/partials/nav-client/nav-client.component';
import { NavAdminFinancierComponent } from './admin/financier/partials/nav-admin-financier/nav-admin-financier.component';
import { HeaderAdminFinancierComponent } from './admin/financier/partials/header-admin-financier/header-admin-financier.component';
import { HeaderAdminAtelierComponent } from './admin/atelier/partials/header-admin-atelier/header-admin-atelier.component';
import { NavAdminAtelierComponent } from './admin/atelier/partials/nav-admin-atelier/nav-admin-atelier.component';
import { HomeAdminAtelierComponent } from './admin/atelier/component/home-admin-atelier/home-admin-atelier.component';
import { HomeAdminFinancierComponent } from './admin/financier/component/home-admin-financier/home-admin-financier.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    HomeComponent,
    FooterComponent,
    HomeClientComponent,
    HeaderClientComponent,
    NavClientComponent,
    NavAdminFinancierComponent,
    HeaderAdminFinancierComponent,
    HeaderAdminAtelierComponent,
    NavAdminAtelierComponent,
    HomeAdminAtelierComponent,
    HomeAdminFinancierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
