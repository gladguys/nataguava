import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class RecruterService {

  constructor(private http: HttpClient) { }

  getByUserId(userId: number) {
    return this.http.get(`${environment.API}/companies/user/${userId}`);
  }

}
