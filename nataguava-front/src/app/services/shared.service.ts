import { CurrentUser } from './../models/current-user.model';
import { Candidate } from './../models/candidate.model';
import { UserCompany } from './../models/user-company.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
  })
  
export class SharedService {

    user: User;

    userIsLoggedIn$ = new BehaviorSubject<boolean>(null);

    constructor() {
		this.isUserInLocalStorage() && this.notifyUserIsLoggedIn();
	}

    isUserInLocalStorage(): boolean {
		return JSON.parse(window.localStorage.getItem('user-ng'));
    }
    
    notifyUserIsLoggedIn(): void {
		this.userIsLoggedIn$.next(true);
	}

	getUserLogged(): User {
		let user: CurrentUser = JSON.parse(window.localStorage.getItem('use-ng'));
		return user != null ? user.user : null;
	}

	static getToken() {
		let user: CurrentUser = JSON.parse(window.localStorage.getItem('user-ng'));
		return user.token;
	}

	saveUserOnLocalStorage(authUser: CurrentUser) {
		this.notifyUserIsLoggedIn();
		window.localStorage.setItem('user-ng',JSON.stringify(authUser));
	}

	logout() {
		window.localStorage.removeItem('user-ng');
		this.userIsLoggedIn$.next(false);
	}


}