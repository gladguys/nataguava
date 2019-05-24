import { Job } from './../models/job.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from "../../environments/environment";
import { SearchDTO } from '../models/dto/search-dto';
import { Content } from '../models/content.model';


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

  findById(id: string): Observable<Job> {
    return this.http.get<Job>(`${environment.API}/jobs/${id}`);
  }

  findAllByUserCompanyId(userId: number): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(`${environment.API}/jobs/company/${userId}`);
  }


  findAllByCandidadeId(userId: number): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(`${environment.API}/candidates/${userId}/jobs`);
  }

  findAll(): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(`${environment.API}/jobs/home`);
  }

  addCandidate(userId: number, jobId: number) {
    return this.http.get(`${environment.API}/jobs/${jobId}/add-candidate/${userId}`);
  }

  close(jobId: number) {
    return this.http.get(`${environment.API}/jobs/${jobId}/close`);
  }

  findByFilter(searchDTO: SearchDTO): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(`${environment.API}/jobs?content=${searchDTO.content}&place=${searchDTO.place}`);
  }

  findAllByTags(contents: Content[]): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(`${environment.API}/jobs?contents=${contents}`);
  }

}
