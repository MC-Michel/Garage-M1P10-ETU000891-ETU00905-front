import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  wsUrl: string;
  constructor(private http: HttpClient) { 
    this.wsUrl = environment.wsUrl;
  }

  createCar(data: any){
    const url = this.wsUrl+"/cars";
    console.log('Here')
    return this.http.post(url,data );
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
