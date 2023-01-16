import { Component, OnDestroy, Input, OnChanges, Output, EventEmitter, TemplateRef, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {lastValueFrom} from 'rxjs';
import { MessageService } from 'src/app/commons/services/message.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-car-creation-form',
  templateUrl: './car-creation-form.component.html',
  styleUrls: ['./car-creation-form.component.scss']
})
export class CarCreationFormComponent {
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
    private carService: CarService,
    private messageService: MessageService) { 
    this.form = fb.group({
      brand: [null,[Validators.required]],
      numberPlate: [null,[Validators.required]],
      description: [null,[Validators.required]],
      status : [environment.carStatus.created, [Validators.required]]
    })
  }
  
  handleCancel(){
    this.setIsVisible(false);
  }
  async handleOk(){
    this.isLoading = true;
    try{
      await lastValueFrom(this.carService.createCar(this.form.value))
      this.setIsVisible(false);
      this.messageService.showSuccess("Voiture ajoutée avec succès")
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e.message)
    } 
    this.isLoading = false;
  }

}
