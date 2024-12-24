import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import  {userService}  from '../services/userService'; // Assuming userService is renamed to UserService

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signUpForm!:FormGroup;
  constructor(private fb:FormBuilder, private us: userService,private router: Router ){
    this.initiateForm();
  }

  initiateForm(){
    this.signUpForm=this.fb.group({
     
     
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isAdmin: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.signUpForm.valid){
      const formData = { ...this.signUpForm.value, isAdmin: this.signUpForm.value.isAdmin === 'true' };
      this.us.addUser(this.signUpForm.value).subscribe(
       {
        next:(response)=>{
          console.log(response);
          this.signUpForm.reset();
          this.router.navigate(['/login'])
        },
        error:(err)=>{
          console.log(err);
 
        }
       }
      )

    }

  }

}
