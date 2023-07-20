import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { DropdownMenu } from '../../interface';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownItemComponent {
  @Input() menu: DropdownMenu;

  @Output() elClick = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  private onClick(e: MouseEvent): void {
    e.stopPropagation();
    this.elClick.emit();
    this.menu?.action();
  }
}
