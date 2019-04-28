import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from "../../environments/environment";
import { Question } from '../models/question.model';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  save(question: Question): Observable<Question> {
    return this.http.post<Question>(`${environment.API}/question`, question);
  }
}
