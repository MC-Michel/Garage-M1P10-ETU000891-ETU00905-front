import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http : HttpClient) { }

  getLesson(){
    return this.http.get(environment.wsUrl + "/lessons");
  }

  getQuotes(){
    return this.http.get(environment.wsUrl + "/lessons/quotes");
  }

  find(){
    return this.http.get(environment.wsUrl + "/lessons/quotes");
  }

  insert(data : any){
    return this.http.post(environment.wsUrl + "/lessons/quote", data);
  }

  update(data : any){
    return this.http.put(environment.wsUrl + "/lessons/quote", data);
  }

  delete(data : any){
    return this.http.delete(environment.wsUrl + "/lessons/quote", data);
  }
}
