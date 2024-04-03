import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-header-buttons',
  templateUrl: './headerButtons.component.html',
  styleUrls: ['./headerButtons.component.css']
})
export class HeaderButtonsComponent {

  isShowable: boolean = false;
  isHovering: boolean = false;
  private timeoutId: any;

  constructor(private router: Router, private apiService: ApiService, private elementRef: ElementRef) { }


  navigateToOther() {
    this.router.navigate(['/shop']); // Naviga alla rotta '/other'
  }

  funzioneProvaGet() {
    this.apiService.apiGET('http://localhost:5454/products/getAll').subscribe(
      (response) => {
        console.log(response); 
      },
      (error) => {
        console.error(error); 
      }
    );
  }

  navigateToDonna(rotta:String) {
    this.router.navigate([rotta]); // Naviga alla rotta '/other'
  }


//----------------------------------------------

showComponent() {
  clearTimeout(this.timeoutId); // Cancella eventuali timeout precedenti
  this.isShowable = true; // Mostra il componente
}

hideComponent(event: MouseEvent) {
  this.timeoutId = setTimeout(() => {
    if (!this.isMouseInside(event)) {
      // Nascondi il componente solo se il mouse non è all'interno
      this.isShowable = false;
    }
  }, 125); // 500 millisecondi di timeout prima di nascondere il componente
}

isMouseInside(event: MouseEvent): boolean {
  const componentRect = this.elementRef.nativeElement.getBoundingClientRect();
  return (
    componentRect.left <= event.clientX &&
    componentRect.right >= event.clientX &&
    componentRect.top <= event.clientY &&
    componentRect.bottom >= event.clientY
  );
}
}

