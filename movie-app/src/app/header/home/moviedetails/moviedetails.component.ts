import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviedetailsService } from 'src/app/moviedetails.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {
  movieID: string = '';
  singleMovieDetails: any = [];
  constructor(private moviefetchservice: MoviedetailsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // console.log("Welcome to Single Movie Details Shown Component");

    this.route.queryParams.subscribe(
      (params) => {
        this.movieID = params['id'];
      }
    );

    this.moviefetchservice.getSingleMovieDetails(this.movieID).subscribe(
      (data) => {
        this.singleMovieDetails = data;
        console.log(data);
      }, 
      (error) => {
        console.log(error);
      });
  }

  navigateToPersonPage(personID: string): void {
    this.router.navigate(['/persondetails'], {queryParams: {
      id: personID
    }});
  }
}
