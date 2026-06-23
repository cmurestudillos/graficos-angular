import { Routes } from '@angular/router';

import { BarraComponent } from './components/barra/barra.component';
import { DonutComponent } from './components/donut/donut.component';
import { LineaComponent } from './components/linea/linea.component';
import { RadarComponent } from './components/radar/radar.component';

export const routes: Routes = [
  { path: 'linea', component: LineaComponent },
  { path: 'barra', component: BarraComponent },
  { path: 'donut', component: DonutComponent },
  { path: 'radar', component: RadarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'linea' },
];
