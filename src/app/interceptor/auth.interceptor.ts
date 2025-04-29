import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {


  constructor(private _authService: AuthService) { }
  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const skipUrls = ['/sign-in', '/sign-up'];

    // Check if the request URL matches the skip list
    const shouldSkip = skipUrls.some(url => req.url.includes(url));

    if (shouldSkip) {
      // If request is sign-in or sign-up, forward it without token
      return next.handle(req);
    }
    // Otherwise, clone request and add Authorization header
    // const token = localStorage.getItem('token'); // or wherever you store token
    const token = this._authService.token;

    console.log("this._authService.token", this._authService.token);
    

    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }

}


// export const authInterceptor: HttpInterceptorFn = (req, next) => {






//   return next(req);
// };
