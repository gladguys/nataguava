import { CurrentUser } from './../models/current-user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root'
})

export class SharedService {

	user: User;

	userIsLoggedIn$ = new BehaviorSubject<boolean>(null);
	userLogged$ = new BehaviorSubject<User>(null);

	constructor() {
		this.isUserInLocalStorage() && this.notifyUserIsLoggedIn();
	}

	isUserInLocalStorage(): boolean {
		return JSON.parse(window.localStorage.getItem('user-ng'));
	}

	isUserLoggedInAsObservable(): Observable<boolean> {
		return this.userIsLoggedIn$.asObservable();
	}

	userAsObservable(): Observable<User> {
		return this.userLogged$.asObservable();
	}

	isUserLoggedIn(): boolean {
		return this.userIsLoggedIn$.getValue();
	}

	notifyUserIsLoggedIn(): void {
		this.userIsLoggedIn$.next(true);
		this.userLogged$.next(this.getUserLogged());
	}

	getUserLogged(): User {
		let user: CurrentUser = JSON.parse(window.localStorage.getItem('user-ng'));
		return user != null ? user.user : null;
	}

	static getToken() {
		let user: CurrentUser = JSON.parse(window.localStorage.getItem('user-ng'));
		return user.token;
	}

	saveUserOnLocalStorage(authUser: CurrentUser) {
		window.localStorage.setItem('user-ng', JSON.stringify(authUser));
		this.notifyUserIsLoggedIn();
	}

	logout() {
		window.localStorage.removeItem('user-ng');
		this.userIsLoggedIn$.next(false);
		this.userLogged$.next(null);
	}


}