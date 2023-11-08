import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { TrendingComponent } from './header/trending/trending.component';
import { MoviedetailsComponent } from './header/home/moviedetails/moviedetails.component';
import { PersonDetailsComponent } from './header/home/moviedetails/person-details/person-details.component';
import { SearchresultComponent } from './header/searchresult/searchresult.component';
import { UnderworkComponent } from './header/underwork/underwork.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'moviedetails', component: MoviedetailsComponent},
  {path: 'persondetails', component: PersonDetailsComponent},
  {path: 'searchresult', component: SearchresultComponent},
  {path: 'underwork', component: UnderworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
