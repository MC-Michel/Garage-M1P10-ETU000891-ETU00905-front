import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepairHistoricService {
  repairsHistoricCollectionUpdate: Subject<any> = new Subject<any>()
  wsUrl: string;
  constructor(private http: HttpClient) { 
    this.wsUrl = environment.wsUrl;
  }
  findById(id: string){
    const url = this.wsUrl+"/repairs-historic/customer/"+id;
    return this.http.get<any[]>(url);
  }
  getRepairsHistorics(carId : string, options: any): Observable<any[]>{
    const url = this.wsUrl+`/repairs-historic/${carId}/customer`;
    return this.http.get<any[]>(url, {params: options});
  }
  getRepairsHistoricsForAdmin(options: any): Observable<any[]>{
    const url = this.wsUrl+"/repairs-historic/admin";
    return this.http.get<any[]>(url, {params: options});
  }
}
