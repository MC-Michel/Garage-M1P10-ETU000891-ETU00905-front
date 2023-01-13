import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent implements OnInit {
  cars: any[] = [];
  isCreationModalVisible: boolean = false;
  constructor(private carService: CarService) { }

  
  openModal(){
    this.isCreationModalVisible = true;
  }
  

  async loadCars(){
    const ans: any = await lastValueFrom<any[]>(this.carService.getCars())
    if(ans.data) this.cars= ans.data;
  }
  async ngOnInit() {
    try{
      console.log('Here')
      await this.loadCars();
      console.log('There')
    }catch(e: any){
      //Afficher error dans alert par exemple
      console.log(e);
    }
  }

}
