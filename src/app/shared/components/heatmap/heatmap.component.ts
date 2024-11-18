import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-heatmap',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './heatmap.component.html',
  styleUrl: './heatmap.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HeatmapComponent {

  @Input() data: any[] = []; // Datos del mapa de calor

  view: [number, number] = [800, 400];
  xAxis: boolean = true;
  yAxis: boolean = true;
  gradient: boolean = true;
  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      '#fee6ce', // Color más claro
      '#fdd0a2',
      '#fdae6b',
      '#fd8d3c',
      '#e6550d',
      '#fb923c'  // Color de acento más intenso
    ]
  };

  ngOnInit() {
    this.updateViewSize();
    window.addEventListener('resize', this.updateViewSize.bind(this));
  }

  updateViewSize() {
    const screenWidth = window.innerWidth;

    // Para móviles
    if (screenWidth <= 768) {
      this.view = [screenWidth * 0.9, 300]; // 90% del ancho de la pantalla
    } else {
      // Para escritorio
      this.view = [Math.min(screenWidth * 0.6, 800), 400]; // 60% del ancho o 800px máximo
    }
  }
}
