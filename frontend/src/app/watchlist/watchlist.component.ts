import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WatchlistService } from '../services/watchListService';
import { userService } from '../services/userService';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent implements OnInit {
  movies:any[]=[];
  user:any ={};
  constructor(private watchlistService: WatchlistService,
    private us:userService
  ) { };

  ngOnInit(): void {
    this.fetchWatchlist();
  }

  fetchWatchlist():void{


    const userId = this.us.getUserId();
    if (!userId) {
      console.error('User ID not found!');
      return;
    }
    
    this.watchlistService.getUserWatchlist(userId).subscribe(

     { next : (response) => {
        this.movies = response.movies; // Adjust based on your API's response structure
      },
      error :(error) => {
        console.error('Error fetching watchlist:', error);
      }}
    );
  }


  removeMovie(movieId: string): void {
    const userId = this.us.getUserId();  // Get the current user ID

    if (userId !== null && movieId !== null) {
      this.watchlistService.removeFromWatchlist(userId, movieId).subscribe(
        (response) => {
          // After successful deletion, filter the movie out of the list
          this.movies = this.movies.filter(movie => movie.id !== movieId);
        },
        (error) => {
          console.error('Error removing movie:', error);
        }
      );
    } else {
      console.error('User ID or Movie ID is null');
    }
  }

}
