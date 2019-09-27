import { Injectable, Inject } from '@angular/core';
import { HttpHandler, HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { ErrorHandlerService } from '../error-handler/error-handler.service';
import { catchError } from 'rxjs/operators';
import { MembershipService } from '../membership-service/membership.service';
import { CoreConfig, CORE_CONFIG } from '../../../config/core-config';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpClient {

  constructor(private authService: MembershipService, private httpHandler: HttpHandler, private errorHandler: ErrorHandlerService,
              @Inject(CORE_CONFIG) private config: CoreConfig) {
    super(httpHandler);
  }

  get<T>(url: string, options?: {}): Observable<T> {
    return super.get<T>(`${this.config.baseUrl + url}`).pipe(catchError(this.handleError));
  }
  post<T>(url: string, params: {}, options?: {}): Observable<T> {
    return super.post<T>(`${this.config.baseUrl + url}`, params).pipe(catchError(this.handleError));
  }
  put<T>(url: string, params: {}, options?: {}): Observable<T> {
    return super.put<T>(`${this.config.baseUrl + url}`, params).pipe(catchError(this.handleError));
  }

  delete<T>(url: string, options?: {}): Observable<T> {
    return super.delete<T>(`${this.config.baseUrl + url}`).pipe(catchError(this.handleError));
  }

  public handleError = (error: Response) => {
    // Do messaging and error handling here
    this.errorHandler.handleError(error.status);
    return observableThrowError(error);
  }
}
