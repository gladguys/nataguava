import { CurrentUserCandidate } from './../models/current-user-candidate.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email:string, senha:string) {
  return this.http.post(`${environment.API}/auth`, {email:email, password:senha});
  }
}
