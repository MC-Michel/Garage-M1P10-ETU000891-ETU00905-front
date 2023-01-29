


import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, lastValueFrom } from 'rxjs';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { MessageService } from 'src/app/commons/services/message.service';
import { CarService } from 'src/app/services/car.service';
import { RepairService } from 'src/app/services/repair.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-current-repair-client',
  templateUrl: './current-repair-client.component.html',
  styleUrls: ['./current-repair-client.component.scss']
})
export class CurrentRepairClientComponent implements OnInit {

  env : any = environment;
  globalProgression : number = 0;
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
    private repairService:RepairService,
    private router: Router
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
    this.carService.getCurrentRepairByCarClient({id : this.car._id}).subscribe((data : any)=>{      
      if(data.data && data.data.length > 0){
        this.car = data.data[0];
        this.refreshDragDropData();
        this.refreshAllProgression();
        this.refreshProgression();
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
    console.log('Here')
    console.log(this.car.currentRepair)
    for(let index in this.car.currentRepair.repairs){
      for(let repair of this.car.currentRepair.repairs[index]){
        if(repair.price)
        totalPrice += repair.price;
      }
    }
    this.price.totalPrice = totalPrice;
    this.price.tva = this.price.totalPrice / (100+environment.tva) * environment.tva;
    this.price.tva = Math.floor(this.price.tva * 100) / 100;
    this.price.withoutTva = this.price.totalPrice - this.price.tva;
  }
  isInvoiceLoading: boolean= false;
  async generateInvoice(){
    this.isInvoiceLoading = true;
    try{
      const response: any = await lastValueFrom(this.repairService.generateInvoice(this.car.currentRepair._id)); 
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
    this.isInvoiceLoading = false;
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
    this.refreshAllProgression();
    this.refreshProgression();
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

  refreshProgression(){
    let repairsNb = this.todo.length + this.inprogress.length + this.ended.length;
    let percentageInProgress = 0;
    for(let repair of this.inprogress){
      percentageInProgress += repair.progression;
    }
    let percentageEnded = this.ended.length * 100;
    let result = (percentageInProgress + percentageEnded) / repairsNb;
    this.globalProgression = Math.floor(result * 100) / 100;
  }

  refreshAllProgression(){
    for(let repair of this.car.currentRepair.repairs.todo){
      repair.progression = 0;
    }
    for(let repair of this.car.currentRepair.repairs.ended){
      repair.progression = 100;
    }
    for(let repair of this.car.currentRepair.repairs.inprogress){
      if(repair.progression == 100){
        repair.progression = 0;
      }
    }
  }

  async generateExitSlip(){
    // Générer pdf ? ...
    try{
      this.car.status = environment.carStatus.waitExit;
      await lastValueFrom(this.carService.generateExitSlip(this.car));
      this.messageService.showSuccess("Bon de sortie généré avec succès")
      this.router.navigate(['/admin/atelier']);
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
  }
}
