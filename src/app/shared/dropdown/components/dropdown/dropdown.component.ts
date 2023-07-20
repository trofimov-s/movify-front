import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EnterLeaveAnimations } from '@movify/core/animation';
import { DropdownMenu } from '../../interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: EnterLeaveAnimations,
})
export class DropdownComponent {
  @Input() menuCollection: DropdownMenu[];

  isOpen = false;

  positionPairs: ConnectionPositionPair[] = [
    {
      offsetX: 0,
      offsetY: 10,
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
    },
  ];

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }
}
