import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})

export class MovieService{
    private baseUrl = 'http://localhost:3000/movies';
    constructor(private http: HttpClient){}

    getMovies(): Observable<any>{
        return this.http.get(`${this.baseUrl}/getMovies`)
    }

    getMovieById(movieId: string): Observable<any>{
        return this.http.get(`${this.baseUrl}/getMovieById/${movieId}`)
    }
   
}