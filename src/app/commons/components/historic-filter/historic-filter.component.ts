import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-historic-filter',
  templateUrl: './historic-filter.component.html',
  styleUrls: ['./historic-filter.component.scss']
})
export class HistoricFilterComponent {
  isLoading: boolean =  false;
  @Output() filterClicked = new EventEmitter<any>(true);

  filterValues: any = {
    dateMin: '',
    dateMax: '',
  }

  generateFilter(){
    const ans: any = [];
    if(this.filterValues.dateMin) {
      ans.push({
        column: 'receptionDate',
        comparator: '>=',
        value: this.filterValues.dateMin,
        type: 'float'
      })
    }
    if(this.filterValues.dateMax) {
      ans.push({
        column: 'receptionDate',
        comparator: '<=',
        value: this.filterValues.dateMax,
        type: 'float'
      })
    }
    return ans;
  }

  constructor() { }

 clickFilter(){
  console.log(this.filterValues)
  this.filterClicked.emit(this.generateFilter());
 }
 init(){
  this.filterValues =  {
    dateMin: '',
    dateMax: '',
  }
 }
}
