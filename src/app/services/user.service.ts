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
   getUserData(){
    const url = `${this.wsUrl}/users/user-data`;
    return this.http.get(url);
  }

  logout(){
    const url = `${this.wsUrl}/users/logout`;
    return this.http.get(url).pipe(map((res: any)=>{
      this.removeToken();
      return res;
    }));
  }
  
  login(data: any) {
    const url = `${this.wsUrl}/users/login`
    return this.http.post(url, data).pipe(map((res: any)=>{
      this.saveToken(res.token);
      return res;
    }));
  }
  signin(data: any){
    const url = `${this.wsUrl}/users/signin`;
    return this.http.post(url,data);
  }
  saveToken(token: string){
    localStorage.setItem('token', token);
  }
  getCurrentToken():string|null{
    return localStorage.getItem('token')
  }
  removeToken(){
    localStorage.removeItem('token');
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
