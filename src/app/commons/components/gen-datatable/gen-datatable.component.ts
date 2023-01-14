import { Component, Input, OnInit } from '@angular/core'; 
import { lastValueFrom } from 'rxjs';
import { GenTableActionOption } from '../../interfaces/gen-table-action-option';
import { GenTableHeader } from '../../interfaces/gen-table-header';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-gen-datatable',
  templateUrl: './gen-datatable.component.html',
  styleUrls: ['./gen-datatable.component.scss']
})
export class GenDatatableComponent implements OnInit {

  @Input() headers: GenTableHeader[];
  @Input() fetchData: Function;
  @Input() actionOptions: GenTableActionOption = {};

  isLoading: boolean = false;
  dataList: any[];

 


  async loadData (){
      this.isLoading = true;
      try {
        this.dataList = (await lastValueFrom<any>(this.fetchData())).data;
      }catch(e: any){
        console.log(e);
        this.messageService.showError(e.message);
      }
      this.isLoading = false;
  }
  constructor(private messageService: MessageService) { }

  async ngOnInit() {
    await this.loadData();
  }

  getBySelector(row: any, selector: string){
      const selectors = selector.split('.'); 
      const ans = selectors.reduce((previousValue: any, currentValue: string, currentId: number)=>{
        if(previousValue[currentValue])
          return  previousValue[currentValue];
        return null;
      },row);
      return ans;
  }
  onUpdateClick(row: any){
    if(this.actionOptions.updateMethod)
      this.actionOptions.updateMethod(row);
  }
  onDeleteClick(row: any){
    if(this.actionOptions.deleteMethod)
      this.actionOptions.deleteMethod(row);
  }
  hasActionOptions(){
    if(
      !this.actionOptions.deleteMethod &&
      !this.actionOptions.updateMethod
    )
      return false;
    return true;
  }
}
