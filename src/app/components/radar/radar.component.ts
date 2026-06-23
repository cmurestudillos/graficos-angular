import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

/** Gráfico de radar con datos de muestra aleatorizables. */
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BaseChartDirective],
})
export class RadarComponent {
  public radarChartType: ChartConfiguration<'radar'>['type'] = 'radar';

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
  };

  public radarChartData: ChartConfiguration<'radar'>['data'] = {
    labels: ['Comer', 'Beber', 'Dormir', 'Jugar', 'Trabajar', 'Bici', 'Correr'],
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Hombres' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Mujeres' },
    ],
  };

  @ViewChild(BaseChartDirective, { static: true }) public chart!: BaseChartDirective;

  public chartClicked({ event, active }: { event?: ChartEvent; active?: object[] }): void {
    console.warn(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent; active?: object[] }): void {
    console.warn(event, active);
  }

  public randomize(): void {
    this.radarChartData.datasets.forEach((dataset, i) => {
      dataset.data = dataset.data.map(() => this.generateNumber(i));
    });
    this.chart.update();
  }

  private generateNumber(i: number): number {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }
}
