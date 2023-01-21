import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { lastValueFrom, Subscription } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/commons/services/message.service';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { environment } from 'src/environments/environment';
import { GenTableCustomActionOption } from 'src/app/commons/interfaces/gen-table-custom-action-option';
import { ConfirmService } from 'src/app/commons/services/confirm.service';
@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent implements OnInit, OnDestroy {
  carStatus = environment.carStatus;
  cars: any[] = [];
  isCreationModalVisible: boolean = false;
  carsUpdateSub: Subscription;
  constructor(private carService: CarService, private messageService: MessageService, private confirmService: ConfirmService) {
    this.fetchData = this.fetchData.bind(this)
    this.showDeposit = this.showDeposit.bind(this)
   }

  headers: GenTableHeader[];
  actionOptions: GenTableActionOption = {};


  @ViewChild(GenDatatableComponent) datatable: GenDatatableComponent;
 
  @ViewChild("depositCarColumn", {static: true}) depositCarColumnTemplate: TemplateRef<any>;
  @ViewChild("actionColumn", {static: true}) actionColumnTemplate: TemplateRef<any>;
  @ViewChild("statusColumn", {static: true}) statusColumnTemplate: TemplateRef<any>;

  fetchData(options: any){
    
    return this.carService.getCars(options);
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
      title: "Statut",
      selector: "description",
      template: this.statusColumnTemplate,
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
    this.carsUpdateSub.unsubscribe();
  }

  updateCar(row: any){

  }

  deleteCar(row: any){

  }
  redirectHistory(row: any){

  }

  getActionOptions(row: any){
    const actionOptions: GenTableCustomActionOption[] = [
      {
        label: 'Modifier',
        actionFunction: this.updateCar
      }, 
      {
        label: 'Supprimer',
        actionFunction: this.deleteCar
      }, 
      {
        label: 'Historique',
        actionFunction: this.redirectHistory
      }, 
    ];
    actionOptions.push({
      label: 'Deposer',
        actionFunction: this.showDeposit
    });
    if(row.status === environment.carStatus.inCirculation) 
   {}
    return actionOptions;
  }


  //Deposit modal   
  currentlyDeposing: any;

  showDeposit(row: any){
    this.currentlyDeposing = row;
    this.confirmService.showConfirm('Deposer cette voiture?', async ()=>{
      await this.depositCar( this.currentlyDeposing._id);
    })
  }




  async depositCar(id : string){
    try{
      await lastValueFrom(this.carService.depositCar({_id : id, status : environment.carStatus.deposited}));
      this.messageService.showSuccess("Voiture déposée avec succès")
      this.datatable.loadData();
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e.message)
    } 
  }
   
}
