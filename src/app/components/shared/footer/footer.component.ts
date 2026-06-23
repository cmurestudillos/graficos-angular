import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Pie de página con el año de copyright actual. */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FooterComponent {
  public year = new Date().getFullYear();
}
