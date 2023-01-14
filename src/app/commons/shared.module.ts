import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './partials/footer/footer.component';
import { GenModalComponent } from './components/gen-modal/gen-modal.component';
import { FormsModule } from '@angular/forms';
import { GenButtonComponent } from './components/gen-button/gen-button.component';
import { GenMessageComponent } from './components/gen-message/gen-message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenDatatableComponent } from './components/gen-datatable/gen-datatable.component';



@NgModule({
  declarations: [
    FooterComponent,
    GenModalComponent,
    GenButtonComponent,
    GenMessageComponent,
    GenDatatableComponent
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
    GenDatatableComponent
  ]
})
export class SharedModule { }
