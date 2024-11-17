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

  view: [number, number] = [600, 300]; // Ajusta el ancho y alto del gráfico
  xAxis: boolean = true;
  yAxis: boolean = true;
  gradient: boolean = true;
  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#ffffb2', '#fed976', '#feb24c', '#fd8d3c', '#f03b20', '#bd0026']
  };
}
