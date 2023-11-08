import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  genreType = 0;
  certificationType: string = "0";
  sortType = "popularity.desc";

  constructor(private http: HttpClient) { }

  fetchGenresAndCertification(): Observable<any> {
    const genreListUrl = `/api/genre/movie/list?api_key=6e072e2d26627608f5660540e82e7d61&language=en`;
    const certificationListUrl = `/api/certification/movie/list?api_key=6e072e2d26627608f5660540e82e7d61`;

    return this.http.get(genreListUrl).pipe(
      mergeMap(api1result => {
        return this.http.get(certificationListUrl).pipe(
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

  fetchUpdatedMovieDetails(): Observable<any> {
    console.log(this.sortType);
    let filterMovieurl = `https://api.themoviedb.org/3/discover/movie?api_key=6e072e2d26627608f5660540e82e7d61&sort_by=${this.sortType}`;
    if(this.genreType !== 0) {
      filterMovieurl += `&with_genres=${this.genreType}`;
    }
    if(this.certificationType !== "0") {
      filterMovieurl += `&certification=${this.certificationType}&certification_country=US&region=US`;
    }

    return this.http.get(filterMovieurl);
  }

  setGenreType(genre: number) {
    this.genreType = genre;
  }

  setCertificationType(newCertification: string) {
    this.certificationType = newCertification;
  }

  setSortType(sorttype: string) {
    this.sortType = sorttype;
    console.log(this.sortType);
  }
}
