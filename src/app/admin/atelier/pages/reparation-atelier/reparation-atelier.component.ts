import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { MessageService } from 'src/app/commons/services/message.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-reparation-atelier',
  templateUrl: './reparation-atelier.component.html',
  styleUrls: ['./reparation-atelier.component.scss']
})
export class ReparationAtelierComponent implements OnInit {
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
  @ViewChild("showRepairDetailsColumn", {static: true}) showRepairDetailsColumnTemplate: TemplateRef<any>;

  fetchData(options: any){
    return this.carService.getRepairsAtelier(options);
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
      template: this.showRepairDetailsColumnTemplate,
      isSortable: false
    },
    ];
  }
  ngOnDestroy(): void {
    this.carsUpdateSub.unsubscribe();
  }

  showRepairDetails(id : string){
    this.router.navigate([`/admin/atelier/repair-details/${id}`]);
  }
}
