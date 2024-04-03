import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-buttons',
  templateUrl: './headerButtons.component.html',
  styleUrls: ['./headerButtons.component.css']
})
export class HeaderButtonsComponent {

  constructor(private router: Router) { }

  navigateToOther() {
    this.router.navigate(['/shop']); // Naviga alla rotta '/other'
  }
  navigateToUomo() {
    this.router.navigate(['/shop']); // Naviga alla rotta '/other'
  }


  navigateToDonna(rotta:String) {
    this.router.navigate([rotta]); // Naviga alla rotta '/other'
  }


//----------------------------------------------

}
