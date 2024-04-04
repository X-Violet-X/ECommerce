import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ECommerce';
  constructor(public authService:AuthService) {}
		
		ngOnInit(){
			this.authService.getUserProfile().subscribe({
				next:data=>console.log("req user", data),
				error:error=>console.log("errorLUCA",error)
			});

}
}
