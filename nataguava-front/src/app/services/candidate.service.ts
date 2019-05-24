import { User } from './../models/user.model';
import { Candidate } from './../models/candidate.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from "../../environments/environment";


@Injectable({
    providedIn: 'root'
  })
export class CandidateService {

  constructor(private http: HttpClient) { }

  createOrUpdate(candidate: Candidate): Observable<User> {
    if(candidate.id != null) {
      return this.http.put<User>(`${environment.API}/candidates`, candidate);
    } else {
      candidate.id = null;
      return this.http.post<User>(`${environment.API}/candidates`, candidate);
    }
  }

  findByUserId(id: number):Observable<Candidate> {
    return this.http.get<Candidate>(`${environment.API}/candidates/user/${id}`);
  }

  findById(id: string) {
    return this.http.get(`${environment.API}/candidates/${id}`);
  }

  findByEmail(email: string) {
    return this.http.get<Candidate>(`${environment.API}/candidates/email/${email}/`);
  }

  findAll() {
    return this.http.get(`${environment.API}/candidates`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.API}/candidates/${id}`);
  }
}
