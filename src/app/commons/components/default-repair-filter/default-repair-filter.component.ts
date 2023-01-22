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
    price: ''
  }

  generateFilter(){
    const ans: any = [];
    if(this.filterValues.brand) {
      ans.push({
        column: 'label',
        comparator: 'like',
        value: this.filterValues.label,
        type: 'string'
      })
    }
    if(this.filterValues.numberPlate) {
      ans.push({
        column: 'description',
        comparator: 'like',
        value: this.filterValues.description,
        type: 'string'
      })
    }
    if(this.filterValues.description) {
      ans.push({
        column: 'price',
        comparator: '=',
        value: this.filterValues.price,
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
    price: ''
  }
 }
}
