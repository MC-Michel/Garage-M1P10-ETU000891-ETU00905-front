import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { MessageService } from 'src/app/commons/services/message.service';
import { ExpensesService } from 'src/app/services/expenses.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-expenses-creation',
  templateUrl: './expenses-creation.component.html',
  styleUrls: ['./expenses-creation.component.scss']
})
export class ExpensesCreationComponent implements OnInit {

  expensesForm : FormGroup;
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
    private expensesService : ExpensesService
    ) {

    this.expensesForm = this.fb.group({
      expensesDate : '',
      expensesTime : '',
      details : this.fb.array([
        this.new()
      ]),
    });
    
  
  }

  ngOnInit(){
  }


  get details() : FormArray {
    return this.expensesForm.get("details") as FormArray;
  }

  new() : FormGroup {
    return this.fb.group({
      type : '',
      description : '',
      price : 0
    });
  }

  add() {
    this.details.push(this.new());
    this.refreshPrice();
  }

  remove(i : number){
    this.details.removeAt(i);
    this.refreshPrice();
  }
 
  async onSubmit() {
    this.isLoading = true;
    try{
      await lastValueFrom(this.expensesService.create(this.expensesForm.value));
      
      this.setIsVisible(false);
      this.messageService.showSuccess("Les dépenses sont bien ajoutées avec succès")
    }catch(e: any){
      this.messageService.showError(e)
    } 
    this.isLoading = false;
  }

  refreshPrice(){
    let totalPrice = 0.0;
    for(let item of this.expensesForm.value.details){
      totalPrice += item.price;
    }
    this.price.totalPrice = totalPrice;
    this.price.tva = this.price.totalPrice / (100+environment.tva) * environment.tva;
    this.price.tva = Math.floor(this.price.tva * 100) / 100;
    this.price.withoutTva = this.price.totalPrice - this.price.tva;
  }

}
