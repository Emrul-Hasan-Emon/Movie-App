import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieFetchService } from '../movie-fetch.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject, debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { SearchtextService } from '../searchtext.service';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Router } from '@angular/router';
import { query } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  suggestedmovieList: any | undefined;
  searchText: string = '';
  searchInput: Observable<any> = new Observable<any>();

  constructor(private http: HttpClient, private searchtextservice: SearchtextService, private router: Router) { }

  ngOnInit() {
    this.searchInput = new Observable(
      (observer) => {
        observer.next(this.searchText)
      }
    );
  }
  
  search(event: AutoCompleteCompleteEvent) {
    console.log(this.searchText);
    /*
    this.searchtextservice.getMoviesListForSuggestion(this.searchText).subscribe(
      (data) => {
        this.suggestedmovieList = data.results;
      },
      (error) => {
        console.log("An error Ocscured");
      }
    );
    */
    this.searchInput.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(
        (searchText) => this.searchtextservice.getMoviesListForSuggestion(this.searchText)
      )
    ).subscribe(
      (data) => {
        this.suggestedmovieList = data.results;
      },
      (error) => {
        console.log('At the time of showing suggestion in search bar an error occured')
      }
    );
  }

  onSelect(event: any) {
    this.searchText = event.value.original_title;
    console.log('Ok = ', this.searchText);
    console.log('Event title: ', event);
  }

  searchButtonClicked(event: any) {
    console.log('Hello');
    console.log('Testing ' + this.searchText);

    this.router.navigate(['/searchresult'], {queryParams: {
      searchText: this.searchText
    }});
  }
}
