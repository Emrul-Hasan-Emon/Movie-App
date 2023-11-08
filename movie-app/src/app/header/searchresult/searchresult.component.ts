import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchtextService } from 'src/app/searchtext.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent {
  searchByText: string = '';
  totalMovieList: any = [];

  constructor(private route: ActivatedRoute, private searchmovie: SearchtextService, private router: Router) {}
  
  ngOnInit() {
    console.log('Welcome to Search Result Page');
    
    this.route.queryParams.subscribe(
      (parmas) => {
        this.searchByText = parmas['searchText'];
     }
    );
    console.log('Welcome to search result component');
    console.log(this.searchByText);
    
    this.searchmovie.getMoviesListForSuggestion(this.searchByText).subscribe(
      (data) => {
        this.totalMovieList = data.results;
        console.log(data.results);
      },
      (error) => {
        console.log("At the time showing movie results after searching an error occured");
      }
    );
  }

  navigateToMovieDetails(movieID: string): void {
    this.router.navigate(['/moviedetails'], {queryParams: {
      id: movieID
    }});
  }
}
