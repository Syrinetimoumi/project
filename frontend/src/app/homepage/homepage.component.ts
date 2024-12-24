import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,MoviesListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})


export class HomepageComponent {
  movies = [
    {
      title: 'Inception',
      description: 'A mind-bending thriller where dreams collide with reality.',
      posterUrl: 'https://image.tmdb.org/t/p/w500/A1.jpg',
    },
    {
      title: 'The Dark Knight',
      description: 'A gritty tale of Gotham’s hero, Batman, facing the Joker.',
      posterUrl: 'https://image.tmdb.org/t/p/w500/B2.jpg',
    },
    {
      title: 'Interstellar',
      description: 'An epic journey through space and time to save humanity.',
      posterUrl: 'https://image.tmdb.org/t/p/w500/C3.jpg',
    },
  ];
  

}
