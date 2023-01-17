import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { lastValueFrom, Subscription } from 'rxjs';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { MessageService } from 'src/app/commons/services/message.service';
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
  repairsUpdateSub: Subscription;
  constructor(private repairService: RepairService, private messageService: MessageService) {
    this.fetchData = this.fetchData.bind(this)
   }

  headers: GenTableHeader[];
  actionOptions: GenTableActionOption = {};


  @ViewChild(GenDatatableComponent) datatable: GenDatatableComponent;

  // This will contain the <ng-template #exempleColonne>...</ng-template>
  @ViewChild("validPaiementColumn", {static: true}) validPaiementColumnTemplate: TemplateRef<any>;

  fetchData(options: any){
    return this.repairService.getRepairsPaiementToValid(options);
  }

  async ngOnInit() {
    this.repairsUpdateSub = this.repairService.repairCollectionUpdate.subscribe(async ()=>{
      this.datatable.loadData();
    })
   this.headers = [
    {
      title: "Identifiant de la voiture",
      selector: "carId",
      isSortable: true
    },
    {
      title: "Date de récéption",
      selector: "receptionDate",
      isSortable: true
    },
    {
      title: "Heure",
      selector: "receptionTime",
      isSortable: true
    },
    {
      title: "Réparation",
      selector: "repairs",
      isSortable: true
    },
    {
      title: "Valider",
      selector: "description", //Anything goes here it's not important
      template: this.validPaiementColumnTemplate,
      isSortable: false
    },
   ];
  }
  ngOnDestroy(): void {
    this.repairsUpdateSub.unsubscribe();
  }
  
  async validPaiement(id : string){
    // this.isLoading = true;
    try{
      await lastValueFrom(this.repairService.validPaiement({_id : id, status : environment.status.validated}));
      // this.setIsVisible(false);
      this.messageService.showSuccess("Voiture déposée avec succès")
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e.message)
    } 
    // this.isLoading = false;
  }
}
