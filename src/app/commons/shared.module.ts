import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './partials/footer/footer.component';
import { GenModalComponent } from './components/gen-modal/gen-modal.component';
import { FormsModule } from '@angular/forms';
import { GenButtonComponent } from './components/gen-button/gen-button.component';
import { GenMessageComponent } from './components/gen-message/gen-message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenDatatableComponent } from './components/gen-datatable/gen-datatable.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { GenConfirmComponent } from './components/gen-confirm/gen-confirm.component';
import { CarStatusComponent } from './components/car-status/car-status.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { DefaultRepairFilterComponent } from './components/default-repair-filter/default-repair-filter.component';
import { AccountingStatsDatatableComponent } from './components/accounting-stats-datatable/accounting-stats-datatable.component';



@NgModule({
  declarations: [
    FooterComponent,
    GenModalComponent,
    GenButtonComponent,
    GenMessageComponent,
    GenDatatableComponent,
    AccessDeniedComponent,
    GenConfirmComponent,
    CarStatusComponent,
    CarFilterComponent,
    DefaultRepairFilterComponent,
    AccountingStatsDatatableComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgbModule
  ],
  exports:[
    FooterComponent,
    GenModalComponent,
    GenButtonComponent,
    GenMessageComponent,
    GenDatatableComponent,
    AccessDeniedComponent,
    GenConfirmComponent,
    CarStatusComponent,
    CarFilterComponent,
    DefaultRepairFilterComponent,
    AccountingStatsDatatableComponent
  ]
})
export class SharedModule { }
