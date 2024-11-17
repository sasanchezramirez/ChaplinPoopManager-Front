import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-chart.component.html',
  styleUrl: './time-chart.component.scss'
})
export class TimeChartComponent {
  @Input() title: string = ''; // Título de la tarjeta
  @Input() subtitle: string | null = null; // Subtítulo opcional
  @Input() icon: string | null = null; // Ícono opcional en la esquina
  @Input() buttonAction: (() => void) | null = null; //
}
