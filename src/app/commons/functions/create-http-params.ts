import { HttpParams } from "@angular/common/http";
import { flattenObject } from "./flatten-object";

  export function createHttpParams(obj: any){
    let params = new HttpParams;
    obj =  flattenObject(obj)
    for (const key in obj) {
      if(obj[key] instanceof Date) obj[key] = obj[key].toISOString()
      params = params.append(key, obj[key]);
    } 
    return params;
  }