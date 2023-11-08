import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieFetchService{

  movies: any[] = [];
  constructor(private http: HttpClient) {}

  getMovieList(apiUrl: any): Observable<any> {
    return this.http.get(apiUrl);
  }
}
