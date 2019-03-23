import { Job } from './../models/job.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  createOrUpdate(job: Job): Observable<Job> {
    if(job.id != null) {
      return this.http.put<Job>(`${environment.API}/jobs`, job);
    } else {
      job.id = null;
      return this.http.post<Job>(`${environment.API}/jobs`, job);
    }
  }

  findById(id: string) {
    return this.http.get(`${environment.API}/jobs/${id}`);
  }

  findAllByUserCompanyId(userId: number) {
    console.log("no service" + userId);
    return this.http.get<Array<Job>>(`${environment.API}/jobs/company/${userId}`)
  }

  findAll(): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(`${environment.API}/jobs/home`);
  }

}
