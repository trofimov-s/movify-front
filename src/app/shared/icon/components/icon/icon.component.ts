import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styles: [
    `
      :host {
        display: inline-flex;

        mat-icon {
          width: inherit;
          height: inherit;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input()
  icon: string;

  @Input()
  customIcon: string;

  @Input()
  extendedClass = '';
}
