import { Candidate } from './../models/candidate.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from "../../environments/environment";


@Injectable()
export class CandidateService {

  constructor(private http: HttpClient) { }

  createOrUpdate(candidate: Candidate): Observable<Candidate> {
    if(candidate.id != null) {
      return this.http.put<Candidate>(`${environment.API}/candidates`, candidate);
    } else {
      candidate.id = null;
      return this.http.post<Candidate>(`${environment.API}/candidates`, candidate);
    }
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
