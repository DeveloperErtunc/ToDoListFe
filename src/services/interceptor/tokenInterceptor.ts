import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../userservice/user.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 public token!:string;
  constructor(
    private UserService:UserService
  ) {
    this.UserService.tokenSubject.subscribe(data => {
      this.token = data;
    })
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${(this.token)}`
      }
    });
    return next.handle(request);
  }
}