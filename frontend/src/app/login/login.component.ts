import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { userService } from '../services/userService';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/authService';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!:FormGroup;
  constructor(private authService: AuthService,
    private fb:FormBuilder,
     private us: userService,
     private router: Router ){
  this.nitiateForm();
}


nitiateForm(){
  this.loginForm=this.fb.group({
   
   
   
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  
  })
}
onSubmit(){
  if(this.loginForm.valid){
   
    this.us.login(this.loginForm.value).subscribe(
     {
      next:(response)=>{

        if(response?.user?._id && response.token){
          console.log('Login successful:', response);
          this.us.storeUserData(response.user._id, response.token);
          this.authService.setLoginStatus(true);
          this.router.navigate(['/home']);
        }
        
       
       else{
        console.error('User ID not found in response!');
       }
       this.loginForm.reset();
      },
      error:(err)=>{
        console.log(err);

      }
     }
    )

  }

}


}