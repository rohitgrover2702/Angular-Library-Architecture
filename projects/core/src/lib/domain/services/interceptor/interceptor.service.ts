import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }

  intercept(
    // tslint:disable-next-line:no-any
    req: HttpRequest<any>,
    next: HttpHandler
    // tslint:disable-next-line:no-any
  ): Observable<HttpEvent<any>> {
    if (req.body) {
      req.headers.append('Content-Type', 'application/json');
      req.headers.append('If-Modified-Since', 'Mon, 26 Jul 1997 05:00:00 GMT');
      req.headers.append('Cache-Control', 'no-cache');
      req.headers.append('Pragma', 'no-cache');
    }
   // const token = this.cookie.check('token') ? this.cookie.get('token') : null;
    const token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null;
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }

    return next.handle(req).pipe(
      tap(
        // tslint:disable-next-line:no-any
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        },
        // tslint:disable-next-line:no-any
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
          }
        }
      )
    );
  }
}
