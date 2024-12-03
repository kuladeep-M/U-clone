// signalr.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isUserLoggedIn  = false;
    constructor(private http: HttpClient,private router: Router) { 
        this.isUserAlreadLoggedIn();
    }

    isUserAlreadLoggedIn(){
        
    if(localStorage.getItem('login')){
        this.isUserLoggedIn = true;
    }else{
        this.router.navigate(['/login'])
    }
    }

    login(username:string, password:string)
   {

      const credentials = { username, password };
      return this.http.post(environment.apiUrl+'/api/login', credentials,{responseType: 'text'}); // Replace with your API endpoint
    }
}