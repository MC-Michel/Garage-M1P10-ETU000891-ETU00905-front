import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { MessageService } from 'src/app/commons/services/message.service';
import { DefaultRepairService } from 'src/app/services/default-repair.service';

@Component({
  selector: 'app-default-repair-creation-form',
  templateUrl: './default-repair-creation-form.component.html',
  styleUrls: ['./default-repair-creation-form.component.scss']
})
export class DefaultRepairCreationFormComponent {
  form: FormGroup;
  isLoading:boolean= false;
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  setIsVisible(b: boolean){
    this.isVisible = b;
    this.isVisibleChange.emit(b);
  }
  constructor(
    private fb: FormBuilder, 
    private defaultRepairService: DefaultRepairService,
    private messageService: MessageService) { 
    this.form = fb.group({
      label: [null,[Validators.required]],
      description: [null,[Validators.required]],
      price: [null,[Validators.required]],
    })
  }
  
  handleCancel(){
    this.setIsVisible(false);
  }
  async handleOk(){
    this.isLoading = true;
    try{
      await lastValueFrom(this.defaultRepairService.createDefaultRepair(this.form.value))
      this.setIsVisible(false);
      this.messageService.showSuccess("Réparation par défaut ajoutée avec succès")
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
    this.isLoading = false;
  }
}
