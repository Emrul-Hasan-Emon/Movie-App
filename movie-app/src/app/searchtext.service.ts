import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchtextService {

  constructor(private http: HttpClient) { }

  getMoviesListForSuggestion(searchtext: string): Observable<any> {
    // const apiUrl = `/api/trending/all/day?api_key=6e072e2d26627608f5660540e82e7d61&language=en-US`;
    const apiUrl = `/api/search/movie?query=${searchtext}&api_key=6e072e2d26627608f5660540e82e7d61&include_adult=false&language=en-US&page=1`
    return this.http.get(apiUrl);
  }
}
