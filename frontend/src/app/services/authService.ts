import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  setLoginStatus(status: boolean): void {
    this.isLoggedInSubject.next(status);
  }

  logout(): void {
    this.setLoginStatus(false);
  }
  
}
