import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { TimeChartComponent } from 'src/app/shared/components/time-chart/time-chart.component';
import { HeatmapComponent } from 'src/app/shared/components/heatmap/heatmap.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardComponent,
    TimeChartComponent,
    HeatmapComponent
    ]
})
export class HomeModule { }
