import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-gen-confirm',
  templateUrl: './gen-confirm.component.html',
  styleUrls: ['./gen-confirm.component.scss']
})
export class GenConfirmComponent implements OnInit, OnDestroy {

  showConfirmSub: any;

  isVisible: boolean = false;
  actionCallback: Function;
  isLoading: boolean = false;
  message: string;

  async handleOk(){
    this.isLoading = true;
    try{
      await this.actionCallback();
    }catch(e: any){
      console.log(e);
      this.messageService.showSuccess(e.message);
    }
    this.isLoading = false;
    this.isVisible = false;
  }
  handleCancel(){
    this.isLoading = false;
    this.isVisible = false;
  }
  constructor(private messageService: MessageService, private confirmService: ConfirmService) { }
  
  ngOnDestroy() {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.showConfirmSub = this.confirmService.showConfirmEvent.subscribe((data: any)=>{
      this.message = data.message;
      this.actionCallback = data.actionCallback;
        this.isVisible = true;
    })
  }

}
