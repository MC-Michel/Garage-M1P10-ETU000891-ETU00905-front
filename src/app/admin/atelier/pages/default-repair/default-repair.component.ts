import { HttpParams } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, lastValueFrom } from 'rxjs';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { flattenObject } from 'src/app/commons/functions/flatten-object';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { GenTableCustomActionOption } from 'src/app/commons/interfaces/gen-table-custom-action-option';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { ConfirmService } from 'src/app/commons/services/confirm.service';
import { MessageService } from 'src/app/commons/services/message.service';
import { DefaultRepairService } from 'src/app/services/default-repair.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-default-repair',
  templateUrl: './default-repair.component.html',
  styleUrls: ['./default-repair.component.scss']
})
export class DefaultRepairComponent implements OnInit {
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
    this.updateDefaultRepair = this.updateDefaultRepair.bind(this)
    this.deleteDefaultRepair = this.deleteDefaultRepair.bind(this)
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
      type: "money",
      isSortable: true
    },
    {
      title: "Action",
      selector: "description", //Anything goes here it's not important
      template: this.actionColumnTemplate,
      isSortable: false
    },
   
   ];
  
  }
  ngOnDestroy(): void {
    this.defaultRepairsUpdateSub.unsubscribe();
  }
  currentUpdateDefaultRepairId: string;
  isUpdateModalVisible: boolean = false;
  updateDefaultRepair(row: any){
    this.currentUpdateDefaultRepairId = row._id;
    this.isUpdateModalVisible = true;
  }

  deleteDefaultRepair(row: any){
    this.confirmService.showConfirm('Supprimer cet élément?', async ()=>{
      await lastValueFrom(this.defaultRepairService.deleteDefaultRepair(row._id));
      this.datatable.loadData();
      this.messageService.showSuccess('Offre retirée');
    })
  }

  getActionOptions(row: any){
    const actionOptions: GenTableCustomActionOption[] = [
      {
        label: 'Modifier',
        actionFunction: this.updateDefaultRepair
      }, 
      {
        label: 'Supprimer',
        actionFunction: this.deleteDefaultRepair
      }, 
    ];
    return actionOptions;
  }
}
