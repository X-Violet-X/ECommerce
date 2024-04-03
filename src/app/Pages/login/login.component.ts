import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService) { }

  signIn(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Aggiungi qui la logica per gestire l'autenticazione

    this.apiService.login(this.username, this.password).subscribe(
      {
        next: (response) => {
            console.log(response);
        },
        error: (error) => { 
          console.error(error) 
        }
      }
    );
  }

  signUp(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Aggiungi qui la logica per gestire l'autenticazione

    this.apiService.registrati(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }




}
