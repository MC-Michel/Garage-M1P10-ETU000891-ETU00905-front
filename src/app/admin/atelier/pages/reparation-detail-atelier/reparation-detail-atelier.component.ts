import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, lastValueFrom } from 'rxjs';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { MessageService } from 'src/app/commons/services/message.service';
import { CarService } from 'src/app/services/car.service';
import { RepairService } from 'src/app/services/repair.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reparation-detail-atelier',
  templateUrl: './reparation-detail-atelier.component.html',
  styleUrls: ['./reparation-detail-atelier.component.scss']
})
export class ReparationDetailAtelierComponent implements OnInit {

  todo : any [] = [];

  inprogress : any [] = [];

  ended : any [] = [];

  isRepairFinished : boolean = false;

  car : any = {
    brand : '',
    numberPlate : '',
    description : '',
    currentRepair : {
      receptionDate : '',
      repairs : []
    }
  };

  price : any = {
    withoutTva : 0.0,
    tva : 0.0,
    totalPrice : 0.0
  }

  isLoading:boolean= false;
  isCreationModalVisible: boolean = false;
  carsUpdateSub: Subscription;

  constructor(
    private carService : CarService,
    private messageService: MessageService,
    private route : ActivatedRoute,
    private repairService:RepairService
    ) {
    this.fetchData = this.fetchData.bind(this)
   }

  headers: GenTableHeader[];
  actionOptions: GenTableActionOption = {};


  @ViewChild(GenDatatableComponent) datatable: GenDatatableComponent;

  fetchData(options: any){
    return this.carService.getCars(options);
  }

  async ngOnInit() {
    this.carsUpdateSub = this.carService.carCollectionUpdate.subscribe(async ()=>{
      this.datatable.loadData();
    });
    this.car._id = this.route.snapshot.paramMap.get("id");
    this.carService.getCurrentRepairByCarAtelier({id : this.car._id}).subscribe((data : any)=>{      
      if(data.data && data.data.length > 0){
        this.car = data.data[0];
        this.refreshDragDropData();
        this.refreshIsFinished();
        this.refreshPrice();
      }      
    });
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
    }
    ];
  }
  ngOnDestroy(): void {
    this.carsUpdateSub.unsubscribe();
  }

  refreshPrice(){
    let totalPrice = 0.0;
    for(let index in this.car.currentRepair.repairs){
      for(let repair of this.car.currentRepair.repairs[index]){
        totalPrice += repair.price;
      }
    }
    this.price.totalPrice = totalPrice;
    this.price.tva = this.price.totalPrice / (100+environment.tva) * environment.tva;
    this.price.tva = Math.floor(this.price.tva * 100) / 100;
    this.price.withoutTva = this.price.totalPrice - this.price.tva;
  }
  async generateInvoice(){
    try{
      const response: any = await lastValueFrom(this.repairService.generateInvoice()); 
      let dataType = response.type;
      let binaryData = [];
      binaryData.push(response);
      let downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      downloadLink.setAttribute('download', 'facture.pdf');
      document.body.appendChild(downloadLink)
      downloadLink.click();
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
  }
  async validPaiement(){
    this.isLoading = true;
    try{
      this.car.currentRepair.status = environment.status.validated;
      await lastValueFrom(this.carService.validPaiement(this.car));
      this.messageService.showSuccess("Paiement validée avec succès")
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
    this.isLoading = false;
  }

  async drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.refreshCar();
    this.refreshIsFinished();
    await lastValueFrom(this.carService.updateCarRepairsProgression(this.car));
  }

  refreshDragDropData(){    
    let repairs = this.car.currentRepair.repairs;
    this.todo = repairs.todo;
    this.inprogress = repairs.inprogress;
    this.ended = repairs.ended;
  }

  refreshCar(){
    this.car.currentRepair.repairs.todo = this.todo;
    this.car.currentRepair.repairs.inprogress = this.inprogress;
    this.car.currentRepair.repairs.ended = this.ended;
  }

  refreshIsFinished(){
    this.isRepairFinished = this.ended.length > 0 
                            && this.inprogress.length === 0 
                            && this.todo.length === 0;
  }

  async generateExitSlip(){
    // Générer pdf ? ...
    try{
      this.car.status = environment.carStatus.waitExit;
      await lastValueFrom(this.carService.generateExitSlip(this.car));
      this.messageService.showSuccess("Bon de sortie généré avec succès")
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
  }

}
