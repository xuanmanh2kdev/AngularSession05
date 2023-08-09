import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QueryParamsListing} from "../model/query-params-listing";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  API_URL = environment.apiUrl + '/events';
  constructor(private httpClient: HttpClient) { } // DI

  getEvents(queryParams: any) : Observable<any> {

    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }

    // undefined => "undefined"
    Object.keys(queryParams).forEach((key: string) => queryParams[key] === undefined && delete queryParams[key]);
    return this.httpClient.get(this.API_URL, {params: queryParams});
  }

  createEvent(event: any) : Observable<any> {
    return this.httpClient.post(this.API_URL, event);
  }

  updateEvent(id: number, event: any) : Observable<any> {
    return this.httpClient.put(`${this.API_URL}/${id}`, event);
  }

  getDetail(id: number) : Observable<any> {
    return this.httpClient.get(`${this.API_URL}/${id}`);
  }

}
