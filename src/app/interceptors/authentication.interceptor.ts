import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }

  addAuthToken(request: HttpRequest<any>) {
    const token = "An example of token to give (with condition based on baseUrl)";

    return request.clone({
        setHeaders: {
          Authorization: token
        }
    });
  }
}
