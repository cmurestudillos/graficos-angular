import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Chart, registerables } from 'chart.js';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Chart.register(...registerables);

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
