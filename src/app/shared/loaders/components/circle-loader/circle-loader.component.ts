import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CircleLoaderAppearance } from '../../models';

@Component({
  selector: 'app-circle-loader',
  templateUrl: './circle-loader.component.html',
  styleUrls: ['./circle-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleLoaderComponent {
  @Input() appearance: CircleLoaderAppearance = 'white';

  get color(): string {
    return this.appearance === 'white' ? 'border-white' : 'border-turquise-400';
  }
}
