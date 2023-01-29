import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { flattenObject } from 'src/app/commons/functions/flatten-object';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { MessageService } from 'src/app/commons/services/message.service';
import { CarService } from 'src/app/services/car.service';
import { RepairService } from 'src/app/services/repair.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-financier',
  templateUrl: './home-financier.component.html',
  styleUrls: ['./home-financier.component.scss']
})
export class HomeFinancierComponent implements OnInit {
  repairs: any[] = [];
  isCreationModalVisible: boolean = false;
  carsUpdateSub: Subscription;
  constructor(
    private carService : CarService,
    private messageService: MessageService,
    private router : Router
    ) {
    this.fetchData = this.fetchData.bind(this)
   }

  headers: GenTableHeader[];
  actionOptions: GenTableActionOption = {};


  @ViewChild(GenDatatableComponent) datatable: GenDatatableComponent;

  // This will contain the <ng-template #exempleColonne>...</ng-template>
  @ViewChild("showCurrentRepairsColumn", {static: true}) showCurrentRepairsColumnTemplate: TemplateRef<any>;

  fetchData(options: any){
    this.filter.push({
      column: 'currentRepair.status',
      comparator: '!=',
      type: 'number',
      value: environment.status.validated
    },
    {
      column: 'currentRepair',
      comparator: 'exists',
      value: true
    },
    {
      column: 'currentRepair',
      comparator: '!=',
      value: null
    })
    const flattened = flattenObject (this.filter, 'filter'); 
    for(const key in flattened) {
      options = options.set(key, flattened[key]);
    }
    return this.carService.getCurrentRepairToValid(options);
  }
  filter: any=[];
  async filterResults(filter: any){ 
    this.filter = filter;
    
    await this.datatable.loadData();
  }

  async ngOnInit() {
    this.carsUpdateSub = this.carService.carCollectionUpdate.subscribe(async ()=>{
      this.datatable.loadData();
    })
    this.headers = [
    {
      title: "Marque",
      selector: "brand",
      isSortable: true
    },
    {
      title: "Immatriculation",
      selector: "numberPlate",
      isSortable: true
    },
    {
      title: "Description",
      selector: "description",
      isSortable: true
    },
    {
      title: "Réparation en cours",
      selector: "description", //Anything goes here it's not important
      template: this.showCurrentRepairsColumnTemplate,
      isSortable: false
    },
    ];
  }
  ngOnDestroy(): void {
    this.carsUpdateSub.unsubscribe();
  }
  
  async validPaiement(id : string){
    // this.isLoading = true;
    try{
      // await lastValueFrom(this.repairService.validPaiement({_id : id, status : environment.status.validated}));
      // this.setIsVisible(false);
      this.messageService.showSuccess("Voiture déposée avec succès")
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
    // this.isLoading = false;
  }

  showCurrentRepair(id : string){
    this.router.navigate([`/admin/financier/current_repairs/${id}`]);
  }
}
