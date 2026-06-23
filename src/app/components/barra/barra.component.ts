import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartConfiguration, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

/** Gráfico de barras con datos de muestra aleatorizables. */
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BaseChartDirective],
})
export class BarraComponent {
  public barChartType: ChartConfiguration<'bar'>['type'] = 'bar';

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Chocolate' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Azucar' },
    ],
  };

  public chartClicked({ event, active }: { event?: ChartEvent; active?: object[] }): void {
    console.warn(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent; active?: object[] }): void {
    console.warn(event, active);
  }

  public randomize(): void {
    this.barChartData = {
      ...this.barChartData,
      datasets: [
        {
          ...this.barChartData.datasets[0],
          data: [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.round(Math.random() * 100),
            56,
            Math.round(Math.random() * 100),
            40,
          ],
        },
        this.barChartData.datasets[1],
      ],
    };
  }
}
