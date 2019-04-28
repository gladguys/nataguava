import { UserCompany } from './../models/user-company.model';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from "../../environments/environment";


@Injectable({
    providedIn: 'root'
  })
export class CompanyService {

  constructor(private http: HttpClient) { }

  createOrUpdate(company: UserCompany): Observable<User> {
    if(company.id != null) {
      return this.http.put<User>(`${environment.API}/companies`, company);
    } else {
      company.id = null;
      return this.http.post<User>(`${environment.API}/companies`, company);
    }
  }

  findById(id: string) {
    return this.http.get(`${environment.API}/companies/${id}`);
  }

  findByUserId(id: number):Observable<UserCompany> {
    return this.http.get<UserCompany>(`${environment.API}/companies/user/${id}`);
  }

  findByEmail(email: string) {
    return this.http.get<UserCompany>(`${environment.API}/companies/email/${email}/`);
  }

  findAll() {
    return this.http.get(`${environment.API}/companies`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.API}/companies/${id}`);
  }
}
