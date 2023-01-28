import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { MessageService } from 'src/app/commons/services/message.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-update-form',
  templateUrl: './car-update-form.component.html',
  styleUrls: ['./car-update-form.component.scss']
})
export class CarUpdateFormComponent implements OnInit, OnChanges {
  currentCar: any;
  isLoadingCar: boolean = true;
  form: FormGroup;
  isLoading:boolean= false;
  @Input() isVisible: boolean = false;
  @Input() carId: string;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  setIsVisible(b: boolean){
    this.isVisible = b;
    this.isVisibleChange.emit(b);
  }
  getFormObject(defaultValues: any = {}){
    return {
      brand: [defaultValues.brand,[Validators.required]],
      numberPlate: [defaultValues.numberPlate,[Validators.required]],
      description: [defaultValues.description,[Validators.required]],
      _id: [defaultValues._id,[Validators.required]],
    }
  }
  constructor(
    private fb: FormBuilder, 
    private carService: CarService,
    private messageService: MessageService) { 
      this.form = this.fb.group(this.getFormObject());
     
  }
  async ngOnChanges(changes: SimpleChanges) {
    if(changes['carId']){
      await this.loadCar();
    }
  }
  async loadCar(){
    try{
      this.currentCar = await lastValueFrom(this.carService.findById(this.carId));
      console.log(this.currentCar)
      this.form = this.fb.group(this.getFormObject(this.currentCar)
      );
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e);
    }
    this.isLoadingCar = false;
  }
  async ngOnInit() {
   await this.loadCar();
  }
   
  handleCancel(){
    this.setIsVisible(false);
  }
  async handleOk(){
    this.isLoading = true;
    try{
      await lastValueFrom(this.carService.updateCar(this.form.value))
      this.setIsVisible(false);
      this.carService.carCollectionUpdate.next(null);
      this.messageService.showSuccess("Voiture mise a jour avec succès")
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
    this.isLoading = false;
  }

}
