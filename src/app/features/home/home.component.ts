import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public todayVisits = '5'
  public todayDate = 'Noviembre 16'
  public dailyVisits = '4.3'
  public poopsSinceLastClean = '10'
  public dateLastClean = '15/11/2024 9:00:00'

  public newClean(){
    console.log("NewClean")
  }


  public onChartRefresh() {
    console.log('Refreshing chart data...');
  }

  heatmapData: any[] = [
    {
      name: 'Monday',
      series: Array.from({ length: 24 }, (_, i) => ({ name: `${i}:00`, value: Math.floor(Math.random() * 10) }))
    },
    {
      name: 'Tuesday',
      series: Array.from({ length: 24 }, (_, i) => ({ name: `${i}:00`, value: Math.floor(Math.random() * 10) }))
    },
    {
      name: 'Wednesday',
      series: Array.from({ length: 24 }, (_, i) => ({ name: `${i}:00`, value: Math.floor(Math.random() * 10) }))
    },
    {
      name: 'Thursday',
      series: Array.from({ length: 24 }, (_, i) => ({ name: `${i}:00`, value: Math.floor(Math.random() * 10) }))
    },
    {
      name: 'Friday',
      series: Array.from({ length: 24 }, (_, i) => ({ name: `${i}:00`, value: Math.floor(Math.random() * 10) }))
    },
    {
      name: 'Saturday',
      series: Array.from({ length: 24 }, (_, i) => ({ name: `${i}:00`, value: Math.floor(Math.random() * 10) }))
    },
    {
      name: 'Sunday',
      series: Array.from({ length: 24 }, (_, i) => ({ name: `${i}:00`, value: Math.floor(Math.random() * 10) }))
    },
  ];

}
