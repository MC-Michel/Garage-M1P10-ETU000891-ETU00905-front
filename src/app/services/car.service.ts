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
  findById(id: string){
    const url = this.wsUrl+"/cars/customer/"+id;
    return this.http.get<any[]>(url);
  }
  createCar(data: any){
    const url = this.wsUrl+"/cars"; 
    return this.http.post(url,data).pipe(map((res)=>{
      this.carCollectionUpdate.next(null);
      return res;
    }));
  }
  getCars(options: any): Observable<any[]>{
    const url = this.wsUrl+"/cars/customer";
    return this.http.get<any[]>(url, {params: options});
  }
  getCarsForAdmin(options: any): Observable<any[]>{
    const url = this.wsUrl+"/cars/to-receive";
    return this.http.get<any[]>(url, {params: options});
  }
  updateCar(data: any){
    const url = this.wsUrl+"/cars/update";
    return this.http.patch(url,data );
  }
  updateCarRepairsProgression(data: any){    
    const url = this.wsUrl+"/cars/repairs_progression";
    return this.http.patch(url,data );
  }
  deleteCar(id: string){
    const url = this.wsUrl+"/cars/customer/"+id;
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
  generateExitSlip(data : any){
    const url = this.wsUrl+"/cars/exit_slip";
    return this.http.patch(url,data );
  }
  getCurrentRepairByCarAtelier(options: any): Observable<any[]>{
    const url = this.wsUrl+"/cars/atelier/current_repair";
    return this.http.get<any[]>(url, {params: options});
  }
  getCurrentRepairByCarClient(options: any): Observable<any[]>{
    const url = this.wsUrl+"/cars/client/current_repair";
    return this.http.get<any[]>(url, {params: options});
  }
  getRepairsAtelier(options: any): Observable<any[]>{
    const url = this.wsUrl+"/cars/atelier/repair";
    return this.http.get<any[]>(url, {params: options});
  }
}
