import { HttpParams } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subscription, lastValueFrom } from 'rxjs';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { flattenObject } from 'src/app/commons/functions/flatten-object';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { GenTableCustomActionOption } from 'src/app/commons/interfaces/gen-table-custom-action-option';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { ConfirmService } from 'src/app/commons/services/confirm.service';
import { MessageService } from 'src/app/commons/services/message.service';
import { DefaultRepairService } from 'src/app/services/default-repair.service';

@Component({
  selector: 'app-default-repair-client',
  templateUrl: './default-repair-client.component.html',
  styleUrls: ['./default-repair-client.component.scss']
})
export class DefaultRepairClientComponent implements OnInit {
  defaultRepairs: any[] = [];
  defaultRepairsUpdateSub: Subscription;
  constructor(
    private defaultRepairService: DefaultRepairService, 
    private messageService: MessageService, 
    private confirmService: ConfirmService,
  ) {
    this.fetchData = this.fetchData.bind(this)
   }

  headers: GenTableHeader[];
  actionOptions: GenTableActionOption = {};


  @ViewChild(GenDatatableComponent) datatable: GenDatatableComponent;
 
  fetchData(options: HttpParams){
    const flattened = flattenObject (this.filter, 'filter'); 
    for(const key in flattened) {
      options = options.set(key, flattened[key]);
    }
    console.log(flattened)
    return this.defaultRepairService.getDefaultRepairs(options);
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
   
   ];
  
  }
  ngOnDestroy(): void {
    this.defaultRepairsUpdateSub.unsubscribe();
  }
  currentUpdateDefaultRepairId: string;

  getActionOptions(row: any){
    const actionOptions: GenTableCustomActionOption[] = [
    ];
    return actionOptions;
  }
}
