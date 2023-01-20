import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  expensesCollectionUpdate: Subject<any> = new Subject<any>()
  wsUrl: string;
  constructor(private http: HttpClient) { 
    this.wsUrl = environment.wsUrl;
  }

  create(data: any){
    const url = this.wsUrl+"/expenses";
    return this.http.post(url,data).pipe(map((res)=>{
      this.expensesCollectionUpdate.next(null);
      return res;
    }));
  }
  get(options: any): Observable<any[]>{
    const url = this.wsUrl+"/expenses";
    return this.http.get<any[]>(url, {params: options});
  }
  update(data: any){
    const url = this.wsUrl+"/expenses";
    return this.http.patch(url,data );
  }
  delete(id: string){
    const url = this.wsUrl+"/expenses/"+id;
    return this.http.delete(url );
  }
}
