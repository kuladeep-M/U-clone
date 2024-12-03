import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)   

  });

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
    
  }

  login()   
 {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if(username && password)
      this.authService.login(username, password).subscribe((x)=>{
    localStorage.setItem('token',x as string);
        this.router.navigate(['']);
        // Handle successful login, e.g., redirect to dashboard
        console.log('Login successful');
    });
        

    }
  }

}
