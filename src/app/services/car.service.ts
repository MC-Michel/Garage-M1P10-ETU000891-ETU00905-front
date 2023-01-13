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
  getCars(): Observable<any[]>{
    const url = this.wsUrl+"/cars";
    return this.http.get<any[]>(url);
  }
  updateCar(data: any){
    const url = this.wsUrl+"/cars";
    return this.http.patch(url,data );
  }
  deleteCar(id: string){
    const url = this.wsUrl+"/cars/"+id;
    return this.http.delete(url );
  }
  
}