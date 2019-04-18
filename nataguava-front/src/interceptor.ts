
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { SharedService } from './app/services/shared.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private sharedService: SharedService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.sharedService.isUserLoggedIn() || this.sharedService.isUserInLocalStorage()) {
			let authReq = req.clone({setHeaders:{'Authorization' : SharedService.getToken()}});
			return next.handle(authReq);
		}
		return next.handle(req);
	}
}
