import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Questionary } from '../models/questionary.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionaryService {

  constructor(private http: HttpClient) { }

  generate(jobId: string): Observable<Questionary> {
      return this.http.get<Questionary>(`${environment.API}/questionaries/${jobId}`);
  }

}
