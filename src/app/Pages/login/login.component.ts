import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'src/app/Services/services/auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class LoginComponent {
  // username: string = '';
  // password: string = '';

  // constructor(private apiService: ApiService) { }

  // signIn(): void {
  //   console.log('Username:', this.username);
  //   console.log('Password:', this.password);
  //   // Aggiungi qui la logica per gestire l'autenticazione

  //   this.apiService.login(this.username, this.password).subscribe(
  //     {
  //       next: (response) => {
  //           console.log(response);
  //       },
  //       error: (error) => { 
  //         console.error(error) 
  //       }
  //     }
  //   );
  // }

  // signUp(): void {
  //   console.log('Username:', this.username);
  //   console.log('Password:', this.password);
  //   // Aggiungi qui la logica per gestire l'autenticazione

  //   this.apiService.registrati(this.username, this.password).subscribe(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );


  //FABIO----------------

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  // signIn(): void {
  //   this.authService.login({ username: this.username, password: this.password })
  //     .subscribe(response => {
  //       localStorage.setItem('jwt', response.jwt);
  //       this.authService.getUserProfile().subscribe();
  //       console.log('login success', response);
  //     });
  // }


  //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('', [Validators.required]),
  });


  signIn() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem("jwt", response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("login success", response)
      }
  })
    
}
  //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

    signUp(): void {
    this.authService.register({ username: this.username, password: this.password })
      .subscribe(response => {
        localStorage.setItem('jwt', response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log('signup success', response);
      });
  }
}