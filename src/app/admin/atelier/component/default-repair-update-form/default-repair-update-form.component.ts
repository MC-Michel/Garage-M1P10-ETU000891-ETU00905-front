import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { MessageService } from 'src/app/commons/services/message.service';
import { DefaultRepairService } from 'src/app/services/default-repair.service';

@Component({
  selector: 'app-default-repair-update-form',
  templateUrl: './default-repair-update-form.component.html',
  styleUrls: ['./default-repair-update-form.component.scss']
})
export class DefaultRepairUpdateFormComponent implements OnInit {
  currentDefaultRepair: any;
  isLoadingDefaultRepair: boolean = true;
  form: FormGroup;
  isLoading:boolean= false;
  @Input() isVisible: boolean = false;
  @Input() defaultRepairId: string;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  setIsVisible(b: boolean){
    this.isVisible = b;
    this.isVisibleChange.emit(b);
  }
  constructor(
    private fb: FormBuilder, 
    private defaultRepairService: DefaultRepairService,
    private messageService: MessageService) { 
  
  }
  async ngOnChanges(changes: SimpleChanges) {
    if(changes['defaultRepairId']){
      await this.loadDefaultRepair();
    }
  }
  async loadDefaultRepair(){
    try{
      this.currentDefaultRepair = await lastValueFrom(this.defaultRepairService.findById(this.defaultRepairId));
      console.log(this.currentDefaultRepair)
      this.form = this.fb.group({
        label: [this.currentDefaultRepair.label,[Validators.required]],
        description: [this.currentDefaultRepair.description,[Validators.required]],
        price: [this.currentDefaultRepair.price,[Validators.required]],
        _id: [this.currentDefaultRepair._id,[Validators.required]],
      })
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e);
    }
    this.isLoadingDefaultRepair = false;
  }
  async ngOnInit() {
   await this.loadDefaultRepair();
  }
   
  handleCancel(){
    this.setIsVisible(false);
  }
  async handleOk(){
    this.isLoading = true;
    try{
      await lastValueFrom(this.defaultRepairService.updateDefaultRepair(this.form.value))
      this.setIsVisible(false);
      this.defaultRepairService.defaultRepairCollectionUpdate.next(null);
      this.messageService.showSuccess("Réparation par défaut mise a jour avec succès")
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
    this.isLoading = false;
  }
}
