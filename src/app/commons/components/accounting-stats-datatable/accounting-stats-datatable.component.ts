import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';
import { MessageService } from '../../services/message.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-accounting-stats-datatable',
  templateUrl: './accounting-stats-datatable.component.html',
  styleUrls: ['./accounting-stats-datatable.component.scss']
})
export class AccountingStatsDatatableComponent implements OnInit {

  groupByType: string = "year";
  groupByValueLimitYear: any = 2023;
  groupByValueLimitMonth: any;
  isLoading: boolean;
  results: any;
  constructor(private message: MessageService, private statsService: StatsService) { }
  isValidForm(){
    return this.groupByType && (this.groupByValueLimitMonth || this.groupByValueLimitYear)
  }
  ngOnInit(): void {
  }

  pickGroupByValue(){
    if(this.groupByType === 'month') return new Date(this.groupByValueLimitMonth);
    if(this.groupByType === 'year') return new Date(this.groupByValueLimitYear, 0,1);
    return null;
  }

  async fetch(){
    this.isLoading = true;
    try{
      const data = {
        groupByType: this.groupByType,
        groupByValueLimit: this.pickGroupByValue() 
      };
      
      this.results = await lastValueFrom(this.statsService.findAccountingStats(data));
    }catch(e: any){
      console.log(e);
      this.message.showError(e);      
    }
    this.isLoading = false;
  }

}
