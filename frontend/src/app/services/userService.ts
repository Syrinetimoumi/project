import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})

export class userService{
    private baseUrl = 'http://localhost:3000/users';
    constructor(private http: HttpClient){}

    addUser(userData:any): Observable<any>{
        return this.http.post(`${this.baseUrl}/addUser`, userData)
    }

    login(userData:any): Observable<any>{
        return this.http.post(`${this.baseUrl}/login`, userData)
    }
    storeUserData(userId: string, token:string): void {
        localStorage.setItem('userId', userId);
        localStorage.setItem('token', token); 
      }
      getUserId(): string | null {
        return localStorage.getItem('userId');
      }
      clearUserData(): void {
        localStorage.removeItem('userId'); // Clear userId when logging out
      }

}