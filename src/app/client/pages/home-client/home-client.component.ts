import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent implements OnInit {
  cars: any[] = [];

  constructor(private carService: CarService) { }
  async loadCars(){
    this.cars = await lastValueFrom<any[]>(this.carService.getCars());
  }
  async ngOnInit() {
    try{
      await this.loadCars();
    }catch(e: any){
      //Afficher error dans alert par exemple
      console.log(e);
    }
  }

}
