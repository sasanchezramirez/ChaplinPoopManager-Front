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



}
