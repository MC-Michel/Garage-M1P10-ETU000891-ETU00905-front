import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gen-modal',
  templateUrl: './gen-modal.component.html',
  styleUrls: ['./gen-modal.component.scss']
})
export class GenModalComponent implements OnChanges {

  @Input() bodyTemplate: TemplateRef<any>;
  @Input() headerTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
 
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @ViewChild('modal',{static: true}) modal: TemplateRef<any>;
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
    this.modalRef = this.modalService.open(content, {
      beforeDismiss: ()=> false
    });
    this.modalRef.dismissed.subscribe(()=>{ 
      console.log("dismissed")
      this.isVisible = false;
      this.isVisibleChange.emit(false);
    });
    this.modalRef.closed.subscribe(()=>{
      console.log("closed")
      this.isVisible = false;
      this.isVisibleChange.emit(false);
    });
    // this.modalRef.hidden.subscribe(()=>{
    //   console.log("hidden")
    //   this.closeModal()
    // })
  }

  closeModal(){
    if(this.modalRef) this.modalRef.close();
  }

}
