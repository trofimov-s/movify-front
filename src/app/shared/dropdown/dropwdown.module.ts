import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '@movify/shared/icon';
import { DropdownComponent, DropdownItemComponent } from './components';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, OverlayModule, IconModule, TranslateModule],
  declarations: [DropdownComponent, DropdownItemComponent],
  exports: [DropdownComponent, DropdownItemComponent],
})
export class DropdownModule {}
