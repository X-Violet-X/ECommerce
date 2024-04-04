import { Component, HostListener, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

 @Input() isActive: any;

  isDarkTheme: boolean = false;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    // OnInit è qui se hai bisogno di inizializzare qualcosa al caricamento del componente
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    // this.isActive = e.pageX < 50;
  }

  toggleTheme(theme: string): void {
    this.isDarkTheme = (theme === 'dark');
    // Considera di spostare la logica di cambio tema in un servizio se usata in più componenti
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }

  closeNav(){
    this.isActive = false;
  }

}
