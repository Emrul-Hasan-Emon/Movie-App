import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/filter.service';
import { MovieFetchService } from 'src/app/movie-fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{
  movies: any[] = [];
//  private apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=6e072e2d26627608f5660540e82e7d61&sort_by=popularity.desc';

  selectMovieType = {
    id: 0,
    name: 'Select Movie Type'
  };
  suggestedMovieType = [this.selectMovieType];
  suggestedMovieTypeList = [this.selectMovieType];

  selectCertificationType = {
    certification: 'Select Certification Type',
    order: 0
  };

  suggestedCertificationType = [this.selectCertificationType];
  suggestedCertificationTypeList = [this.selectCertificationType];

  selectSortType = {
      title: 'Sort By',
      link: ''
  };

  suggestedSortType = [
    this.selectSortType,
    {
      title: 'Least Popular',
      link: 'popularity.desc'
    },
    {
      title: 'Most Popular',
      link: 'popularity.asc'
    },
    {
      title: 'Least Vote Count',
      link: 'vote_count.asc'
    },
    {
      title: 'Most Voted Count',
      link: 'popularity.desc'
    }
  ];
  suggestedSortTypeList = this.suggestedSortType;

  constructor(private moviefetchservice: MovieFetchService, private router: Router, private filterservice: FilterService) {}
  
  fetchAllMovies() {
    this.filterservice.fetchUpdatedMovieDetails().subscribe(
      (data) => {
        this.movies = data.results;
        console.log(this.movies);
      },
      (error) => {
        console.log('At the time of fetching movies based on filter an error occured.');
      }
    );
  }

  fetchFilterNecessaries() {
    this.filterservice.fetchGenresAndCertification().subscribe(
      (data) => {
        for(const item of data.result1.genres) {
          const newObj = {
            id: item.id,
            name: item.name
          };
          this.suggestedMovieType.push(newObj);
          this.suggestedMovieTypeList.push(newObj);
        }
        
        for(const certification of data.result2.certifications.US) {
          console.log(certification);
          const newObj = {
            certification: certification.certification,
            order: certification.order
          }
          this.suggestedCertificationType.push(newObj);
          this.suggestedCertificationTypeList.push(newObj);
        }

        console.log(data.result1.genres);
      },
      (error) => {
        console.log("At the time of fetching Genres and Certification an error occured");
      }
    );
  }

  ngOnInit(): void {
    this.fetchFilterNecessaries();
    this.fetchAllMovies();
  }

  filterButtonClicked() {
    this.filterservice.setGenreType(this.selectMovieType.id);
    let certification_id = this.selectCertificationType.certification;
    if(certification_id === 'Select Certification Type') {
      certification_id = '0';
    }
    this.filterservice.setCertificationType(certification_id);

    console.log(this.selectSortType.link);
    this.filterservice.setSortType(this.selectSortType.link);

    this.fetchAllMovies();
  }

  clearButtonClicked() {
    this.selectMovieType.id = 0;
    this.selectMovieType.name = 'Select Movie Type';
    this.suggestedMovieType = this.suggestedMovieTypeList;

    this.selectCertificationType.certification = 'Select Certification Type';
    this.suggestedCertificationType = this.suggestedCertificationTypeList;

    this.selectSortType.title = 'Sort By';
    this.selectSortType.link = 'popularity.desc';
    this.suggestedSortType = this.suggestedSortTypeList;
    
    this.filterButtonClicked();
  }

  navigateToMovieDetails(movieID: string): void {
    this.router.navigate(['/moviedetails'], {queryParams: {
      id: movieID
    }});
  }
}
