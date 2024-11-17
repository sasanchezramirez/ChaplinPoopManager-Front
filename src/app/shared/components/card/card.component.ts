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
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() content: string | null = null;
  @Input() icon: string | null = null;
  @Input() value: string = '';
  @Input() buttonAction: () => void = () => {}
  @Input() iconSubtitle: string | null = null;
}
