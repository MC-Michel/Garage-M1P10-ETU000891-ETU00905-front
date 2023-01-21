import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core'; 
import { lastValueFrom, retry } from 'rxjs';
import { GenRequestOptions } from '../../interfaces/gen-request-options';
import { GenTableActionOption } from '../../interfaces/gen-table-action-option';
import { GenTableCustomActionOption } from '../../interfaces/gen-table-custom-action-option';
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
  @Input() custonActionOptions: GenTableCustomActionOption[] = [];

  isLoading: boolean = false;
  dataList: any[];
  paginationElmts: any[] = [];

  requetsOptions: GenRequestOptions={
    pagination:{
      page:1,
      pageElmtCount:10,
      orderBy: []
    },
    filters: []
  };
  totalElmtCount: number;

  flattenObject(obj: any, mainKey=''){
    let ans: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const currentKey = mainKey !== '' ? mainKey+'['+key+']' : key;
        if (typeof obj[key] === 'object'){
          ans = {...ans, ...this.flattenObject(obj[key], currentKey)}
        }else{
          ans[currentKey] = obj[key];
        }
      }
    }
    return ans;
  }

  createHttpParams(obj: any){
    let params = new HttpParams;
    obj = this.flattenObject(obj);
    for (const key in obj) {
      params = params.append(key, obj[key]);
    } 
    return params;
  }

  async loadData (){
      this.isLoading = true;
      try {
        const fecthResults = await lastValueFrom<any>(this.fetchData(this.createHttpParams(this.requetsOptions)));
        this.dataList = fecthResults.data;
        this.totalElmtCount = fecthResults.meta.totalElmtCount;
        this.createPaginationElmt();
      }catch(e: any){
        console.log(e);
        this.messageService.showError(e);
      }
      this.isLoading = false;
  }

  async goToPage(paginationElmt: any){
    if(paginationElmt.isDisabled) return;
    this.requetsOptions.pagination.page = paginationElmt.page;
    await this.loadData();
  }

  async handleSort(columnName: string){
    const orderByArr = this.requetsOptions.pagination.orderBy;
    if(orderByArr.length === 0) {
      orderByArr.push({column: columnName, order: "asc"});
    
    }else if(orderByArr[0].column === columnName){
      orderByArr[0].order = orderByArr[0].order === 'asc' ? 'desc' : 'asc' ;
    }else{
      orderByArr.pop();
      orderByArr.push({column: columnName, order: "asc"});
    }
  
    console.log(this.requetsOptions);
    
    await this.loadData();
  }
  getPaginationElmtClass(paginationElmt: any){
    let className = 'page-item ';
    if(paginationElmt.type === 'previous') className += ' prev-item ';
    if(paginationElmt.type === 'next') className += ' next-item ';
    if(paginationElmt.isActive) className +=  ' active ';
    if(paginationElmt.isDisabled) className +=  ' disabled ';
    return className;
     
  }

  getSortElmtClass(currentColumn: string){
    let ans = ' sorting ';
    const orderByArr = this.requetsOptions.pagination.orderBy;
    if(orderByArr.length === 0) return ans;
    if(orderByArr[0].column !== currentColumn) return ans;
    if(orderByArr[0].order === 'asc') return ` ${ans} sorting_asc`
    return ` ${ans} sorting_desc`;
  }

  //Pagination
  getLastPageNb(){
    return Math.ceil(this.totalElmtCount/this.requetsOptions.pagination.pageElmtCount);
  }

  createPaginationElmt(){
    const amplt = 2;
    const currentPage = this.requetsOptions.pagination.page;
    const lastPageNb = this.getLastPageNb()
    const ans: any[] = [];
  
    ans.push({
      page: currentPage-1,
      isActive: false,
      isDisabled: currentPage <= 1,
      type:'previous' 
    })
    
    for(let i = currentPage-amplt;i<=currentPage+amplt;i++){
      if(i >=1 && i <= lastPageNb )
        ans.push({
          page: i,
          isActive: i === currentPage,
          isDisabled: false,
          type:'number' 
        })
    }
   
    ans.push({
      page: currentPage+1,
      isActive: false,
      isDisabled: currentPage >= lastPageNb,
      type:'next' 
    })
    
    this.paginationElmts = ans;
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
