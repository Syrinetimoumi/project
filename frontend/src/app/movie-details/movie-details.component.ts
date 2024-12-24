import { Component } from '@angular/core';
import { MovieService } from '../services/movieService';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WatchlistService } from '../services/watchListService';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  movie:any = {};

  constructor(private watchlistService:WatchlistService , private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    console.log(movieId);
    if(movieId){
      this.movieService.getMovieById(movieId).subscribe(
        data=>{
          this.movie = data;
         
        }
      )
    }else {
      console.error('Movie ID not found in the route!');
    }
  
  }

  onAddToWatchlist(movieId:any):void{
    const userId=localStorage.getItem('userId');
    if(!userId){
      console.log('userId is not set');
      return;
    }
    

    this.watchlistService.addToWatchlist(userId,movieId).subscribe(
      {
        next: (response) => {
          console.log('Movie added to watchlist successfully');
          alert('Movie added to your watchlist!');
        },
        error: (error) => {
          console.error('Error adding movie to watchlist:', error);
        }
      }
    )
  }
}
