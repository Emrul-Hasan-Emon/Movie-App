import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, merge, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviedetailsService {
  moviesData: any = [];
  constructor(private http: HttpClient) { }

  getSingleMovieDetails(movieID: string): Observable<any> {
    const apiUrl = `/api/movie/${movieID}?api_key=6e072e2d26627608f5660540e82e7d61&language=en-US`;
    const creditUrl = `/api/movie/${movieID}/credits?api_key=6e072e2d26627608f5660540e82e7d61&language=en-US`
    
    return this.http.get(apiUrl).pipe(
      mergeMap(api1result => {
        return this.http.get(creditUrl).pipe(
          mergeMap(api2result => {
            const combinedData = {
              result1: api1result,
              result2: api2result
            };
            return of(combinedData);
          })
        );
      })
    );
  }
}
