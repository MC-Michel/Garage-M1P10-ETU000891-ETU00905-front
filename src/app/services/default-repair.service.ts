import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefaultRepairService {
  defaultRepairCollectionUpdate: Subject<any> = new Subject<any>()
  wsUrl: string;
  constructor(private http: HttpClient) { 
    this.wsUrl = environment.wsUrl;
  }
  findById(id: string){
    const url = this.wsUrl+"/default-repairs/customer/"+id;
    return this.http.get<any[]>(url);
  }
  createDefaultRepair(data: any){
    const url = this.wsUrl+"/default-repairs"; 
    return this.http.post(url,data).pipe(map((res)=>{
      this.defaultRepairCollectionUpdate.next(null);
      return res;
    }));
  }
  getDefaultRepairs(options: any): Observable<any[]>{
    const url = this.wsUrl+"/default-repairs/customer";
    return this.http.get<any[]>(url, {params: options});
  }
  getDefaultRepairsForAdmin(options: any): Observable<any[]>{
    const url = this.wsUrl+"/default-repairs/admin";
    return this.http.get<any[]>(url, {params: options});
  }
  updateDefaultRepair(data: any){
    const url = this.wsUrl+"/default-repairs";
    return this.http.patch(url,data );
  }
  deleteDefaultRepair(id: string){
    const url = this.wsUrl+"/default-repairs/"+id;
    return this.http.delete(url );
  }
}
