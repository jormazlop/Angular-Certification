import {Injectable} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import {Observable, throwError, } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     return next.handle(request)
           .pipe(
              map(event => {
                if (event instanceof HttpResponse) {
                  if(event.body.response_code &&  event.body.response_code != 0) {
                    alert(`Error Code: ${event.body.response_code}`);
                  }
                }

                return event;
              })
           );
  }
}
