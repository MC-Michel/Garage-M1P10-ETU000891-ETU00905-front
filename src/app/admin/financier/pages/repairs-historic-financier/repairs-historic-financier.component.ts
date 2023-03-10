import { HttpParams } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { flattenObject } from 'src/app/commons/functions/flatten-object';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { GenTableCustomActionOption } from 'src/app/commons/interfaces/gen-table-custom-action-option';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { ConfirmService } from 'src/app/commons/services/confirm.service';
import { MessageService } from 'src/app/commons/services/message.service';
import { CarService } from 'src/app/services/car.service';
import { RepairHistoricService } from 'src/app/services/repair-historic.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-repairs-historic-financier',
  templateUrl: './repairs-historic-financier.component.html',
  styleUrls: ['./repairs-historic-financier.component.scss']
})
export class RepairsHistoricFinancierComponent implements OnInit {
  epairsHistoric: any[] = [];
  repairsHistoricUpdateSub: Subscription;
  env : any = environment;
  constructor(
    private carService: CarService, 
    private repairHistoricService: RepairHistoricService, 
    private messageService: MessageService, 
    private confirmService: ConfirmService,
    private router : Router
  ) {
    this.fetchData = this.fetchData.bind(this)
   }

  headers: GenTableHeader[];
  actionOptions: GenTableActionOption = {};


  @ViewChild(GenDatatableComponent) datatable: GenDatatableComponent;
  @ViewChild("detailsColumn", {static: true}) detailsColumnTemplate: TemplateRef<any>;
  @ViewChild("priceColumn", {static: true}) priceColumnTemplate: TemplateRef<any>;

  fetchData(options: HttpParams){
    const flattened = flattenObject (this.filter, 'filter'); 
    for(const key in flattened) {
      options = options.set(key, flattened[key]);
    }
    return this.repairHistoricService.getRepairsHistoricsForAdmin(options);
  }

  filter: any=[];
  async filterResults(filter: any){ 
    this.filter = filter;
    await this.datatable.loadData();
  }
  

   
  async ngOnInit() {
    this.repairsHistoricUpdateSub = this.repairHistoricService.repairsHistoricCollectionUpdate.subscribe(async ()=>{
      this.datatable.loadData();
    })
   this.headers = [
    {
      title: "Date de r??c??ption",
      selector: "receptionDate",
      type: "date",
      isSortable: true
    },
    {
      title: "D??tail",
      selector: "description", //Anything goes here it's not important
      template: this.detailsColumnTemplate,
      isSortable: false
    },
    {
      title: "Prix total",
      selector: "description", //Anything goes here it's not important
      template: this.priceColumnTemplate,
      isSortable: false
    },
   
   ];
  
  }
  ngOnDestroy(): void {
    this.repairsHistoricUpdateSub.unsubscribe();
  }
  currentUpdateCarId: string;
  isUpdateModalVisible: boolean = false;

  getActionOptions(row: any){
    const actionOptions: GenTableCustomActionOption[] = [
    ];
    return actionOptions;
  }
  getPrice(repairData : any){
    let totalPrice = 0;
    for(let item of repairData.repairs.ended){
      totalPrice += item.price;
    }
    return totalPrice;
  }   
}
