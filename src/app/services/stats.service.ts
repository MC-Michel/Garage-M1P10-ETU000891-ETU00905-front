import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { createHttpParams } from '../commons/functions/create-http-params';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  url: string;
  constructor(private http: HttpClient) { 
    this.url = environment.wsUrl;
  }

  findAccountingStats(data: any){
    const url = `${this.url}/stats`;
    return this.http.get(url, {params: createHttpParams (data)});
  }
}
