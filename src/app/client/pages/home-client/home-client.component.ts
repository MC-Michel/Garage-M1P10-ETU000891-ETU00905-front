import { Component, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, Subscription } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/commons/services/message.service';
@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent implements OnInit, OnDestroy {
  cars: any[] = [];
  isCreationModalVisible: boolean = false;
  carsUpdateSub: Subscription;
  constructor(private carService: CarService, private messageService: MessageService) { }

  
  openModal(){
    this.isCreationModalVisible = true;
  }
  

  async loadCars(){
    const ans: any = await lastValueFrom<any[]>(this.carService.getCars())
    if(ans.data) this.cars= ans.data;
  }
  async ngOnInit() {
    this.carsUpdateSub = this.carService.carCollectionUpdate.subscribe(async ()=>{
      await this.loadCars();
    })
    try{
      await this.loadCars();
    }catch(e: any){
      //Afficher error dans alert par exemple
      console.log(e);
    }
  }
  ngOnDestroy(): void {
    this.carsUpdateSub.unsubscribe();
  }
   
}
