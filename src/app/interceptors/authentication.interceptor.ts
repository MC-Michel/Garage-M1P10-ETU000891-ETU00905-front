import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addAuthToken(request);
    return next.handle(request);
  }

  addAuthToken(request: HttpRequest<any>) {
    const token:string|null = this.userService.getCurrentToken(); 
    return request.clone({
        setHeaders: {
          Authorization: token as string
        }
    });
  }
}
