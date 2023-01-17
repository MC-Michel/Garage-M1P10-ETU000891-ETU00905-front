import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  wsUrl: string;
  constructor(private http: HttpClient) {
    this.wsUrl = environment.wsUrl;
   }

  login(data: any) {
    const url = `${this.wsUrl}/users/login`
    return this.http.post(url, data).pipe(map((res: any)=>{
      this.saveToken(res.token);
      return res;
    }));
  }
  saveToken(token: string){
    localStorage.setItem('token', token);
  }
  getCurrentToken():string|null{
    return localStorage.getItem('token')
  }
  getNextLink(roleId: number){
    const paths: any = {
      '1': '/client'
    }
    return paths[roleId+''];
  }
  checkIfAllowed(roleIds: number[]){
    const url = `${this.wsUrl}/users/can-access`
    return this.http.post(url, {roleIds}).pipe(map((res: any)=>{
      return res.canAccess;
    }));
  }
}
