import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private message: NzMessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(responseError: HttpErrorResponse) {
    if (responseError.status === 0) {
      this.message.error('Can not connect to server!');
    } else if (responseError.status === 401 || responseError.status === 403) {
      localStorage.clear();
      this.router.navigate(['/login']);
    } else {
      this.message.error(responseError.error.error);
    }
    return throwError(() => new Error("Something bad happened!"));
  }
}
