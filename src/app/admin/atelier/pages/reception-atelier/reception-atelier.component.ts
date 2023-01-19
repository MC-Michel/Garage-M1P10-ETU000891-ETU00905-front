import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { MessageService } from 'src/app/commons/services/message.service';
import { CarService } from 'src/app/services/car.service';
import { RepairService } from 'src/app/services/repair.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reception-atelier',
  templateUrl: './reception-atelier.component.html',
  styleUrls: ['./reception-atelier.component.scss']
})
export class ReceptionAtelierComponent implements OnInit{

  carId : string | null = '';
  receptionForm : FormGroup;
  isLoading:boolean= false;
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  setIsVisible(b: boolean){
    this.isVisible = b;
    this.isVisibleChange.emit(b);
  }
  price : any = {
    withoutTva : 0.0,
    tva : 0.0,
    totalPrice : 0.0
  }
 
  constructor(
    private fb:FormBuilder,
    private messageService: MessageService,
    private route : ActivatedRoute,
    private repairService : RepairService,
    private carService : CarService,
    ) {

    this.receptionForm = this.fb.group({
      status : '',
      receptionDate : '',
      receptionTime : '',
      repairs : this.fb.array([
        this.new()
      ]),
    });
    
  
  }

  ngOnInit(){
    this.carId = this.route.snapshot.paramMap.get("id");    
  }


  get repairs() : FormArray {
    return this.receptionForm.get("repairs") as FormArray;
  }

  new() : FormGroup {
    return this.fb.group({
      label : '',
      description : '',
      price : 0
    });
  }

  add() {
    this.repairs.push(this.new());
    this.refreshPrice();
  }

  remove(i : number){
    this.repairs.removeAt(i);
    this.refreshPrice();
  }
 
  async onSubmit() {
    this.isLoading = true;
    try{
      this.receptionForm.value.status = environment.status.created;
      let currentRepair = this.receptionForm.value;
      currentRepair.repairs = {
        todo : currentRepair.repairs,
        inprogress : [],
        ended : []
      };
      await lastValueFrom(this.carService.addCurrentRepair({
        _id : this.carId,
        currentRepair : currentRepair
      }));
      
      this.setIsVisible(false);
      this.messageService.showSuccess("Les réparations pour cette voiture sont bien ajoutées avec succès")
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e.message)
    } 
    this.isLoading = false;
  }

  refreshPrice(){
    let totalPrice = 0.0;
    for(let repair of this.receptionForm.value.repairs){
      totalPrice += repair.price;
    }
    this.price.totalPrice = totalPrice;
    this.price.tva = this.price.totalPrice / (100+environment.tva) * environment.tva;
    this.price.tva = Math.floor(this.price.tva * 100) / 100;
    this.price.withoutTva = this.price.totalPrice - this.price.tva;
  }

}
