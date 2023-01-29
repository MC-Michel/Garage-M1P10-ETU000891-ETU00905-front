import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'src/app/commons/services/message.service';
import { CarService } from 'src/app/services/car.service';
import {lastValueFrom} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit-form',
  templateUrl: './exit-form.component.html',
  styleUrls: ['./exit-form.component.scss']
})
export class ExitFormComponent{

  exitInitDate: any = '';

  isLoading:boolean= false;
  @Input() car: any;
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  setIsVisible(b: boolean){
    this.isVisible = b;
    this.isVisibleChange.emit(b);
  }
  constructor(
    private router: Router,
    private carService: CarService,
    private messageService: MessageService) { 
   
  }
  
  handleCancel(){
    this.setIsVisible(false);
  }
  
  async handleOk(){
    // Générer pdf ? ...
    try{
      this.car.status = environment.carStatus.waitExit;
      console.log(this.exitInitDate);
      
      this.car.exitInitDate = this.exitInitDate;
      await lastValueFrom(this.carService.generateExitSlip(this.car));
      this.messageService.showSuccess("Bon de sortie généré avec succès")
      this.router.navigate(['/admin/atelier']);
    }catch(e: any){
      console.log(e);
      this.messageService.showError(e)
    } 
  }

}
