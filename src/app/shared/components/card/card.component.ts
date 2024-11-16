import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = ''; // Título de la tarjeta
  @Input() subtitle: string = ''; // Subtítulo opcional
  @Input() content: string | null = null; // Contenido dinámico
  @Input() icon: string | null = null; // Icono opcional
  @Input() value: string = '';
}
