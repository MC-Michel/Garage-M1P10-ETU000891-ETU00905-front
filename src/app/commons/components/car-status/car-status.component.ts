import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-status',
  templateUrl: './car-status.component.html',
  styleUrls: ['./car-status.component.scss']
})
export class CarStatusComponent{
  carStatus = environment.carStatus;
  @Input() status: number;
  constructor() { }
 

}
