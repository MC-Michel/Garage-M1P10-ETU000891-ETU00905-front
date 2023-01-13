import { Component, OnDestroy, Input, OnChanges, Output, EventEmitter, TemplateRef, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import {Subscription} from 'rxjs';
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
  constructor(private fb: FormBuilder) { 
    this.form = fb.group({
      brand: ['',[Validators.required]],
      numberPlate: ['',[Validators.required]],
      description: ['',[Validators.required]],
    })
  }
  
  handleCancel(){
    this.setIsVisible(false);
  }
  async handleOk(){
    this.isLoading = true;
    try{
      console.log(this.form.value)
      this.setIsVisible(false);
    }catch(e: any){
      console.log(e);
    } 
    this.isLoading = false;
  }

}
