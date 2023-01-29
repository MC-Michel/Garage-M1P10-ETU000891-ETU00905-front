import { Component, OnDestroy, OnInit, TemplateRef, ViewChild,  } from '@angular/core';
import { lastValueFrom, Subscription } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { HttpParams } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/commons/services/message.service';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { environment } from 'src/environments/environment';
import { GenTableCustomActionOption } from 'src/app/commons/interfaces/gen-table-custom-action-option';
import { ConfirmService } from 'src/app/commons/services/confirm.service';
import { flattenObject } from 'src/app/commons/functions/flatten-object';
import { Router } from '@angular/router';
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
  constructor(
    private carService: CarService, 
    private messageService: MessageService, 
    private confirmService: ConfirmService,
    private router : Router
  ) {
    this.fetchData = this.fetchData.bind(this)
    this.showDeposit = this.showDeposit.bind(this)
    this.showRecup = this.showRecup.bind(this)
    this.updateCar = this.updateCar.bind(this)
    this.deleteCar = this.deleteCar.bind(this)
    this.redirectHistory = this.redirectHistory.bind(this)
    this.redirectReparation = this.redirectReparation.bind(this)
    this.recupCar = this.recupCar.bind(this)
   }

  headers: GenTableHeader[];
  actionOptions: GenTableActionOption = {};


  @ViewChild(GenDatatableComponent) datatable: GenDatatableComponent;
 
  @ViewChild("depositCarColumn", {static: true}) depositCarColumnTemplate: TemplateRef<any>;
  @ViewChild("actionColumn", {static: true}) actionColumnTemplate: TemplateRef<any>;
  @ViewChild("statusColumn", {static: true}) statusColumnTemplate: TemplateRef<any>;

  fetchData(options: HttpParams){
    const flattened = flattenObject (this.filter, 'filter'); 
    for(const key in flattened) {
      options = options.set(key, flattened[key]);
    }
    return this.carService.getCars(options);
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
  currentUpdateCarId: string;
  isUpdateModalVisible: boolean = false;
  updateCar(row: any){
    this.currentUpdateCarId = row._id;
    this.isUpdateModalVisible = true;
  }

  deleteCar(row: any){
    this.confirmService.showConfirm('Supprimer cette voiture?', async ()=>{
      await lastValueFrom(this.carService.deleteCar(row._id));
      this.datatable.loadData();
      this.messageService.showSuccess('Voiture retirée');
    })
  }
  redirectHistory(row: any){
    console.log(row);
    this.router.navigate([`/client/car/${row._id}/repairs-historic`]);
  }
  redirectReparation(row: any){ 
    this.router.navigate([`/client/car/current-repair/${row._id}`]);
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
   
    if(row.status === environment.carStatus.inCirculation) {
      actionOptions.push({
        label: 'Déposer',
          actionFunction: this.showDeposit
    });
   }

   if(row.status === environment.carStatus.inReparation) {
    actionOptions.push({
        label: 'Voir reparation',
          actionFunction: this.redirectReparation
    });
  }
  if(row.status === environment.carStatus.waitExit) {
    actionOptions.push({
        label: 'Récupérer',
          actionFunction: this.showRecup
    });
  }
    return actionOptions;
  }


  //Deposit modal   
  currentlyDeposing: any;

  showDeposit(row: any){
    this.currentlyDeposing = row;
    this.confirmService.showConfirm('Déposer cette voiture?', async ()=>{
      await this.depositCar( this.currentlyDeposing._id);
    })
  }

  showRecup(row: any){
    this.currentlyDeposing = row;
    this.confirmService.showConfirm('Recupérer cette voiture?', async ()=>{
      await this.recupCar( this.currentlyDeposing._id);
    })
  }




  async depositCar(id : string){
    try{
      await lastValueFrom(this.carService.depositCar({_id : id, status : environment.carStatus.deposited}));
      this.messageService.showSuccess("Voiture déposée avec succès")
      this.datatable.loadData();
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
  }
  async recupCar(id : string){
    try{
      await lastValueFrom(this.carService.exitCar({_id : id}));
      this.messageService.showSuccess("Voiture retirée avec succès")
      this.datatable.loadData();
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
  }
}
