import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../services/movieService';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit { 


  movies:any[]=[];
  constructor(private http: HttpClient, private router:Router, private moviesService:MovieService) { }

  ngOnInit(): void {
    this.getMovies();
    console.log(this.movies);
  }
  getMovies():void{
    this.moviesService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
        console.log('movies fetched', this.movies);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })
  }

  onWatchNow(movie: any): void {
    console.log(movie._id); 
    if (movie._id) {
      this.router.navigate([`/movie-details`, movie._id]);
    } else {
      console.error('Movie ID is undefined!');
    }
  }

}
