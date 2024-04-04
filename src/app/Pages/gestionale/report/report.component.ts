import { Component, OnInit, HostListener } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class DashboardComponent implements OnInit {
  isActive: boolean = false;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    // this.initializeChart();
  }

  // initializeChart(): void {
  //   const ctx = (document.getElementById('sales-chart') as HTMLCanvasElement).getContext('2d');
  //   const salesChart = new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno'],
  //       datasets: [{
  //         label: 'Vendite €',
  //         data: [5000, 5250, 5500, 5750, 6000, 6250],
  //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //         borderColor: 'rgba(255, 99, 132, 1)',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  } 