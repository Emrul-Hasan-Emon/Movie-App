import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersondetailsService {

  constructor(private http: HttpClient) { }

  getSinglePersonDetails(personID: string): Observable<any> {
    const apiUrl = `/api/person/${personID}?api_key=6e072e2d26627608f5660540e82e7d61&language=en-US`;
    return this.http.get(apiUrl);
  }
}
