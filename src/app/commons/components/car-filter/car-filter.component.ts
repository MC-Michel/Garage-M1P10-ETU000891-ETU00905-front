import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.scss']
})
export class CarFilterComponent{
  isLoading: boolean =  false;
  @Output() filterClicked = new EventEmitter<any>(true);

  filterValues: any = {
    brand: '',
    numberPlate: '',
    description: ''
  }

  generateFilter(){
    const ans: any = [];
    if(this.filterValues.brand) {
      ans.push({
        column: 'brand',
        comparator: 'like',
        value: this.filterValues.brand,
        type: 'string'
      })
    }
    if(this.filterValues.numberPlate) {
      ans.push({
        column: 'numberPlate',
        comparator: 'like',
        value: this.filterValues.numberPlate,
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
    return ans;
  }

  constructor() { }

 clickFilter(){
  console.log(this.filterValues)
  this.filterClicked.emit(this.generateFilter());
 }
 init(){
  this.filterValues =  {
    brand: '',
    numberPlate: '',
    description: ''
  }
 }
}
