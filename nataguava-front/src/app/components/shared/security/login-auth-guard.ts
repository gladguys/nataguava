import { SharedService } from './../../../services/shared.service';
import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()
export class LoginAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private sharedService: SharedService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        if(this.sharedService.isUserInLocalStorage() || this.sharedService.isUserLoggedIn()) {
            this.router.navigate(['/home-company']);
        }
        console.log("teste");
        return true;
    }
}