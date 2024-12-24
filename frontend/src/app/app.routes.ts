import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PassResetComponent } from './pass-reset/pass-reset.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { HeaderComponent } from './header/header.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'passreset', component: PassResetComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'header', component: HeaderComponent },
  { path:'movieList', component: MoviesListComponent},
  {path: 'movie-details/:id', component: MovieDetailsComponent}



  
];



@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes),CommonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }




