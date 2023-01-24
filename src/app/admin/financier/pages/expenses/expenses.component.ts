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
  @ViewChild("detailsColumn", {static: true}) detailsColumnTemplate: TemplateRef<any>;
  @ViewChild("priceColumn", {static: true}) priceColumnTemplate: TemplateRef<any>;

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
    {
      title: "Détail",
      selector: "description", //Anything goes here it's not important
      template: this.detailsColumnTemplate,
      isSortable: false
    },
    {
      title: "Prix total",
      selector: "description", //Anything goes here it's not important
      template: this.priceColumnTemplate,
      isSortable: false
    },
   ];
   this.actionOptions = {
   };
  }
  ngOnDestroy(): void {
    this.expensesUpdateSub.unsubscribe();
  }
  getPrice(expenses : any){
    let totalPrice = 0;
    for(let item of expenses.details){
      totalPrice += item.price;
    }
    return totalPrice;
  } 
}
