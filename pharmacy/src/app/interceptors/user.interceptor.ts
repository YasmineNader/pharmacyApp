import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let userToken = localStorage.getItem('token')
    if(userToken){
      request = request.clone({
        headers:request.headers.set('Authorization',userToken)
      })


    }
    return next.handle(request);
  }
}
