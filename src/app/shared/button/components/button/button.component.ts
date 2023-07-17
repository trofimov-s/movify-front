import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  type: 'primary' | 'secondary' = 'primary';

  @Input()
  disabled: boolean;

  @Input()
  extendedClass = '';

  @Input()
  size: 'w-auto' | 'w-24' | 'w-32' | 'w-full' = 'w-auto';

  @Input()
  isLoading: boolean;

  @Output()
  onclick = new EventEmitter<MouseEvent>();
}
