import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { lastValueFrom, Subscription } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { MessageService } from 'src/app/commons/services/message.service';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { environment } from 'src/environments/environment';
import { flattenObject } from 'src/app/commons/functions/flatten-object';

@Component({
  selector: 'app-home-atelier',
  templateUrl: './home-atelier.component.html',
  styleUrls: ['./home-atelier.component.scss']
})
export class HomeAtelierComponent implements OnInit, OnDestroy {
  cars: any[] = [];
  carStatus = environment.carStatus;
  isCreationModalVisible: boolean = false;
  carsUpdateSub: Subscription;
  constructor(private carService: CarService, private messageService: MessageService) {
    this.fetchData = this.fetchData.bind(this)
   }

  headers: GenTableHeader[];
  actionOptions: GenTableActionOption = {};


  @ViewChild(GenDatatableComponent) datatable: GenDatatableComponent;

  // This will contain the <ng-template #exempleColonne>...</ng-template>
  @ViewChild("receiveCarColumn", {static: true}) receiveCarColumnTemplate: TemplateRef<any>;
  @ViewChild("statusColumn", {static: true}) statusColumnTemplate: TemplateRef<any>;
  fetchData(options: any){
    if(!this.filter) this.filter = [];
    this.filter.push({
      column: 'status',
      comparator: '=',
      value: environment.carStatus.deposited,
      type: 'number'
    });
    const flattened = flattenObject (this.filter, 'filter'); 
    for(const key in flattened) {
      options = options.set(key, flattened[key]);
    }
    return this.carService.getCarsForAdmin(options);
  }
  filter: any=[];
  async filterResults(filter: any){ 
    this.filter = filter;
    await this.datatable.loadData();
  }
  
  openModal(){
    this.isCreationModalVisible = true;
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
      title: "Action",
      selector: "description", //Anything goes here it's not important
      template: this.receiveCarColumnTemplate,
      isSortable: false
    },
   ];
  }
  ngOnDestroy(): void {
    this.carsUpdateSub.unsubscribe();
  }

}
