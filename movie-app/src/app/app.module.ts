import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TrendingComponent } from './header/trending/trending.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MoviedetailsComponent } from './header/home/moviedetails/moviedetails.component';
import { PersonDetailsComponent } from './header/home/moviedetails/person-details/person-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchresultComponent } from './header/searchresult/searchresult.component';
import { DropdownModule }from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UnderworkComponent } from './header/underwork/underwork.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TrendingComponent,
    MoviedetailsComponent,
    PersonDetailsComponent,
    SearchresultComponent,
    UnderworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
