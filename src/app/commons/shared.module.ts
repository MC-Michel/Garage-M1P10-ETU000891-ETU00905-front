import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './partials/footer/footer.component';
import { GenModalComponent } from './components/gen-modal/gen-modal.component';
import { FormsModule } from '@angular/forms';
import { GenButtonComponent } from './components/gen-button/gen-button.component';



@NgModule({
  declarations: [
    FooterComponent,
    GenModalComponent,
    GenButtonComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[
    FooterComponent,
    GenModalComponent,
    GenButtonComponent
  ]
})
export class SharedModule { }
