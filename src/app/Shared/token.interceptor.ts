import { Injectable,Injector,INJECTOR } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private inject:Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authservice = this.inject.get(AuthService);

     let JWTrequest = request.clone({
       setHeaders: {
         Authorization: 'baerer ' + authservice.GetToken(),
       },
     });


    return next.handle(JWTrequest);
  }
}
