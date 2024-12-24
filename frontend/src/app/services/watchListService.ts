import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userService } from './userService';
import { AuthService } from './authService';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private apiUrl = 'http://localhost:3000/watchlist'; // Base API URL

  constructor(private http: HttpClient, private us:userService) {}

  // Fetch the user's watchlist
  getUserWatchlist(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }

  // Remove a movie from the watchlist
  removeFromWatchlist(userId: string, movieId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove`, { body: { userId, movieId } });
  }

  addToWatchlist(userId:string,movieId: any):Observable<any> {
    
    return this.http.post(`${this.apiUrl}/add`,{userId,movieId},{
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
