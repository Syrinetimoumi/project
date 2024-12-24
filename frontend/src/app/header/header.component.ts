import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/authService';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit  {

  isLoggedIn:boolean = false;
  constructor( private authService : AuthService){}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(

      (status)=>{
        this.isLoggedIn=status;
      }
    )
  }

  logout(): void {
    this.authService.logout();
  }
  

}
