import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  showConfirmEvent: Subject<any> = new Subject<any>() 
  showConfirm(message: string, actionCallback: Function){
    this.showConfirmEvent.next({
      message, actionCallback
    })
  }
  constructor() { }
}
