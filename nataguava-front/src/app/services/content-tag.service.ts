import { ContentTag } from './../models/content-tag.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ContentTagService {

  constructor(private http: HttpClient) { }

  save(contentTag: ContentTag): Observable<ContentTag> {
    return this.http.post<ContentTag>(`${environment.API}/content-tag`, contentTag);
  }

  getAll(): Observable<ContentTag[]> {
      return this.http.get<ContentTag[]>(`${environment.API}/content-tag`);
  }
}
