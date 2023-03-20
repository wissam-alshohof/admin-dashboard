import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err,caught) => {
        this._snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: err['error']
        })
        return throwError(() => err);
      })
    );
  }
}
