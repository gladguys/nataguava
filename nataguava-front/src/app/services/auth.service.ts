import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  constructor(private http: HttpClient) {}

  login(email:string, senha:string) {
    return this.http.post(`${environment.API}/auth`, {email:email, password:senha});
  }
=======
	constructor(private http: HttpClient) {}

	login(email:string, senha:string) {
		return this.http.post(`${environment.API}/auth`, {email:email, password:senha});
	}
>>>>>>> 7225872b4921b380edc77be285934d7be89e795e
}
