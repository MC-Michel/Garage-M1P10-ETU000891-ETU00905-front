import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-default-repair-filter',
  templateUrl: './default-repair-filter.component.html',
  styleUrls: ['./default-repair-filter.component.scss']
})
export class DefaultRepairFilterComponent{
  isLoading: boolean =  false;
  @Output() filterClicked = new EventEmitter<any>(true);

  filterValues: any = {
    label: '',
    description: '',
    priceMin: '',
    priceMax: '',
  }

  generateFilter(){
    const ans: any = [];
    if(this.filterValues.label) {
      ans.push({
        column: 'label',
        comparator: 'like',
        value: this.filterValues.label,
        type: 'string'
      })
    }
    if(this.filterValues.description) {
      ans.push({
        column: 'description',
        comparator: 'like',
        value: this.filterValues.description,
        type: 'string'
      })
    }
    if(this.filterValues.priceMin) {
      ans.push({
        column: 'price',
        comparator: '>=',
        value: this.filterValues.priceMin,
        type: 'float'
      })
    }
    if(this.filterValues.priceMax) {
      ans.push({
        column: 'price',
        comparator: '<=',
        value: this.filterValues.priceMax,
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
    label: '',
    description: '',
    priceMin: '',
    priceMax: '',
  }
 }
}
