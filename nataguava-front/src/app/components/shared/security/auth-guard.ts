import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
   
    constructor(
		private router: Router,
		private sharedService: SharedService
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		if (this.sharedService.isUserLoggedIn() || this.sharedService.isUserInLocalStorage()) {
			return true;
		}
		this.router.navigate(['/login'], {queryParams: {fromUrl: state.url}});
		return false;
	}

}