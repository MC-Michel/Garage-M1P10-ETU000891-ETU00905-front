import { Component, OnDestroy, Input, OnChanges, Output, EventEmitter, TemplateRef, SimpleChanges, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-car-creation-form',
  templateUrl: './car-creation-form.component.html',
  styleUrls: ['./car-creation-form.component.scss']
})
export class CarCreationFormComponent implements   OnChanges {
  
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @ViewChild('carCreationModal',{static: true}) modal: TemplateRef<any>;
  modalRef: NgbModalRef;

  
  constructor(private modalService: NgbModal) { }
  

  ngOnChanges(changes: SimpleChanges): void {
   if(changes['isVisible']){
    if(changes['isVisible'].currentValue != changes['isVisible'].previousValue){
      if(changes['isVisible'].currentValue)
        this.openModal(this.modal);
      else
        this.closeModal();
    }
   }
  }
 
  openModal(content: any){
    this.modalRef = this.modalService.open(content);
    this.modalRef.dismissed.subscribe(()=>{ 
      this.isVisible = false;
      this.isVisibleChange.emit(false);
    });
    this.modalRef.closed.subscribe(()=>{
      this.isVisible = false;
      this.isVisibleChange.emit(false);
    });
  }

  closeModal(){
    if(this.modalRef) this.modalRef.close();
  }

}
