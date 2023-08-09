import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  API_URL = environment.apiUrl + '/login'; // http://localhost:8888/api/login
  constructor(private httpClient: HttpClient) { }

  login(payload: any): Observable<any> {
    return this.httpClient.post(this.API_URL, payload, { responseType: 'text' });
  }
}
