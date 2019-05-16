import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from "../../environments/environment";
import { ResultCandidateJob } from '../models/result-candidate-job.model';


@Injectable({
  providedIn: 'root'
})
export class ResultCandidateJobService {

  constructor(private http: HttpClient) { }

  create(result: ResultCandidateJob) {
      return this.http.post(`${environment.API}/results`, result);
  }

}
