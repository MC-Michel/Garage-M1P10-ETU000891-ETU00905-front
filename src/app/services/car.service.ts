import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carCollectionUpdate: Subject<any> = new Subject<any>()
  wsUrl: string;
  constructor(private http: HttpClient) { 
    this.wsUrl = environment.wsUrl;
  }

  createCar(data: any){
    const url = this.wsUrl+"/cars";
    console.log('Here')
    return this.http.post(url,data).pipe(map((res)=>{
      this.carCollectionUpdate.next(null);
      return res;
    }));
  }
  getCars(options: any): Observable<any[]>{
    const url = this.wsUrl+"/cars";
    return this.http.get<any[]>(url, {params: options});
  }
  updateCar(data: any){
    const url = this.wsUrl+"/cars";
    return this.http.patch(url,data );
  }
  deleteCar(id: string){
    const url = this.wsUrl+"/cars/"+id;
    return this.http.delete(url );
  }
  depositCar(data: any){
    const url = this.wsUrl+"/cars/deposit";
    return this.http.patch(url, data);
  }
  addCurrentRepair(data : any){
    const url = this.wsUrl+"/cars/add_current_repair";
    return this.http.patch(url,data );
  }
  getCurrentRepairToValid(options: any): Observable<any[]>{
    const url = this.wsUrl+"/cars/current_repair_to_valid";
    return this.http.get<any[]>(url, {params: options});
  }
  validPaiement(data : any){
    const url = this.wsUrl+"/cars/valid_paiement";
    return this.http.patch(url,data );
  }
  getCurrentRepairByCarAtelier(options: any): Observable<any[]>{
    const url = this.wsUrl+"/cars/atelier/current_repair";
    return this.http.get<any[]>(url, {params: options});
  }
}
