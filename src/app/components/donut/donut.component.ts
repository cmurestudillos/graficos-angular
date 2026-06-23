import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartConfiguration, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

/** Gráfico de tipo donut con datos de muestra aleatorizables. */
@Component({
  selector: 'app-dona',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BaseChartDirective],
})
export class DonutComponent {
  public doughnutChartType: ChartConfiguration<'doughnut'>['type'] = 'doughnut';

  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Chorizo', 'Salchichon', 'Mortadela'],
    datasets: [{ data: [35, 45, 100] }],
  };

  public chartClicked({ event, active }: { event?: ChartEvent; active?: object[] }): void {
    console.warn(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent; active?: object[] }): void {
    console.warn(event, active);
  }

  public randomize(): void {
    this.doughnutChartData = {
      ...this.doughnutChartData,
      datasets: [
        {
          ...this.doughnutChartData.datasets[0],
          data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
        },
      ],
    };
  }
}
