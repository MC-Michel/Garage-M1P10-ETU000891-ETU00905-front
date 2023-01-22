import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { flattenObject } from 'src/app/commons/functions/flatten-object';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { GenTableCustomActionOption } from 'src/app/commons/interfaces/gen-table-custom-action-option';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { ConfirmService } from 'src/app/commons/services/confirm.service';
import { MessageService } from 'src/app/commons/services/message.service';
import { DefaultRepairService } from 'src/app/services/default-repair.service';

@Component({
  selector: 'app-default-repair-popup',
  templateUrl: './default-repair-popup.component.html',
  styleUrls: ['./default-repair-popup.component.scss']
})
export class DefaultRepairPopupComponent {
  isLoading:boolean= false;
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  setIsVisible(b: boolean){
    this.isVisible = b;
    this.isVisibleChange.emit(b);
  }
  defaultRepairs: any[] = [];
  isCreationModalVisible: boolean = false;
  defaultRepairsUpdateSub: Subscription;
  constructor(
    private defaultRepairService: DefaultRepairService, 
    private messageService: MessageService, 
    private confirmService: ConfirmService,
    private router : Router
  ) {
    this.fetchData = this.fetchData.bind(this)
   }

  headers: GenTableHeader[];
  actionOptions: GenTableActionOption = {};


  @ViewChild(GenDatatableComponent) datatable: GenDatatableComponent;
 
  @ViewChild("actionColumn", {static: true}) actionColumnTemplate: TemplateRef<any>;

  fetchData(options: HttpParams){
    const flattened = flattenObject (this.filter, 'filter'); 
    for(const key in flattened) {
      options = options.set(key, flattened[key]);
    }
    console.log(flattened)
    return this.defaultRepairService.getDefaultRepairsForAdmin(options);
  }
  
  openModal(){
    this.isCreationModalVisible = true;
  }

  filter: any=[];
  async filterResults(filter: any){ 
    this.filter = filter;
    await this.datatable.loadData();
  }
  
  async ngOnInit() {
    this.defaultRepairsUpdateSub = this.defaultRepairService.defaultRepairCollectionUpdate.subscribe(async ()=>{
      this.datatable.loadData();
    })
   this.headers = [
    {
      title: "Intitulé",
      selector: "label",
      isSortable: true
    },
    {
      title: "Description",
      selector: "description",
      isSortable: true
    },
    {
      title: "Prix",
      selector: "price",
      isSortable: true
    },
    {
      title: "Selectionner",
      selector: "description", //Anything goes here it's not important
      template: this.actionColumnTemplate,
      isSortable: false
    },
   
   ];
  
  }
  ngOnDestroy(): void {
    this.defaultRepairsUpdateSub.unsubscribe();
  }

  handleCancel(){
    this.setIsVisible(false);
  }

  selectItem(index : number){
    
  }
}
