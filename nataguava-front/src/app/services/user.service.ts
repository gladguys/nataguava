import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Person} from "../models/person.model";
import {environment} from "../../environments/environment";


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  createOrUpdate(person: Person): Observable<Person> {
    if(person.id != null && person.id != '') {
      return this.http.put<Person>(`${environment.API}/users`, person);
    } else {
      person.id = null;
      return this.http.post<Person>(`${environment.API}/users`, person);
    }
  }

  findById(id: string) {
    return this.http.get(`${environment.API}/users/${id}`);
  }

  findByEmail(email: string) {
    return this.http.get<Person>(`${environment.API}/users/email/${email}/`);
  }

  findAll() {
    return this.http.get(`${environment.API}/users`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.API}/users/${id}`);
  }

}
