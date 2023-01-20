import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenDatatableComponent } from 'src/app/commons/components/gen-datatable/gen-datatable.component';
import { GenTableActionOption } from 'src/app/commons/interfaces/gen-table-action-option';
import { GenTableHeader } from 'src/app/commons/interfaces/gen-table-header';
import { MessageService } from 'src/app/commons/services/message.service';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenses: any[] = [];
  expensesUpdateSub: Subscription;
  constructor(private expensesService: ExpensesService, private messageService: MessageService) {
    this.fetchData = this.fetchData.bind(this)
   }

  headers: GenTableHeader[];
  actionOptions: GenTableActionOption = {};


  @ViewChild(GenDatatableComponent) datatable: GenDatatableComponent;

  fetchData(options: any){
    return this.expensesService.get(options);
  }
  
  async ngOnInit() {
    this.expensesUpdateSub = this.expensesService.expensesCollectionUpdate.subscribe(async ()=>{
      this.datatable.loadData();
    })
   this.headers = [
    {
      title: "Date",
      selector: "expensesDate",
      isSortable: true
    },
    {
      title: "Heure",
      selector: "expensesTime",
      isSortable: true
    },
   ];
   this.actionOptions = {
    updateMethod : this.updateExpenses,
    deleteMethod : this.deleteExpenses
   };
  }
  ngOnDestroy(): void {
    this.expensesUpdateSub.unsubscribe();
  }

  updateExpenses(id : string){

  }

  deleteExpenses(id : string){

  }
}
