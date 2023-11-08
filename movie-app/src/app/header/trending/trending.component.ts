import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieFetchService } from 'src/app/movie-fetch.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {
  movies: any[] = [];
  private apiUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=6e072e2d26627608f5660540e82e7d61&language=en-US';

  constructor(private moviefetchservice: MovieFetchService, private router: Router) {}

  ngOnInit(): void {
    console.log("Arrived at Trending Component");
    this.moviefetchservice.getMovieList(this.apiUrl).subscribe(
      (data: any) => {
        this.movies = data.results;
        console.log(data.results);
      },
      (error) => {
        console.log("Error Occured");
      }
    );;
    console.log("ashche");
  }

  navigateToMovieDetails(movieID: string): void {
    this.router.navigate(['/moviedetails'], {queryParams: {
      id: movieID
    }});
  }
}
