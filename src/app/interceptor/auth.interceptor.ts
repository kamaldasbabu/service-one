import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const skipUrls = ['/login', '/register'];
    const shouldSkip = skipUrls.some(url => req.url.includes(url));

    if (shouldSkip) {
      return next.handle(req);
    }

    const token = this._authService.token;

    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Check for unauthorized status
        if (error.status === 403) {
          console.warn('Unauthorized or forbidden, redirecting to login...');
          this._router.navigate(['/sign-in']);
        }
        return throwError(() => error);
      })
    );
  }
}
