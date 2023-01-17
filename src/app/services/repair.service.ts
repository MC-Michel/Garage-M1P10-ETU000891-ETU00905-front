import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  repairCollectionUpdate: Subject<any> = new Subject<any>()
  wsUrl: string;
  constructor(private http: HttpClient) { 
    this.wsUrl = environment.wsUrl;
  }

  createRepair(data: any){
    const url = this.wsUrl+"/repairs";
    console.log('Here')
    return this.http.post(url,data).pipe(map((res)=>{
      this.repairCollectionUpdate.next(null);
      return res;
    }));
  }
  getRepairs(options: any): Observable<any[]>{
    const url = this.wsUrl+"/repairs";
    return this.http.get<any[]>(url, {params: options});
  }
  updateRepair(data: any){
    const url = this.wsUrl+"/repairs";
    return this.http.patch(url,data );
  }
  deleteRepair(id: string){
    const url = this.wsUrl+"/repairs/"+id;
    return this.http.delete(url );
  }
}
