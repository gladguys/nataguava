import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from "../models/user.model";
import {environment} from "../../environments/environment";


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  createOrUpdate(user: User): Observable<User> {
    if(user.id != null && user.id != '') {
      return this.http.put<User>(`${environment.API}/users`, user);
    } else {
      user.id = null;
      return this.http.post<User>(`${environment.API}/users`, user);
    }
  }

  findById(id: string) {
    return this.http.get(`${environment.API}/users/${id}`);
  }

  findByEmail(email: string) {
    return this.http.get<User>(`${environment.API}/users/email/${email}/`);
  }

  findAll() {
    return this.http.get(`${environment.API}/users`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.API}/users/${id}`);
  }

}
