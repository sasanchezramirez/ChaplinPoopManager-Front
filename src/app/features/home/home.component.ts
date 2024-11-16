import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pet = {
    name: 'Chaplin'
  }

  public todayVisits = '5'
  public todayDate = 'Noviembre 16'

}
