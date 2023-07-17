import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components';
import { LoadersModule } from '@movify/shared/loaders';

@NgModule({
  imports: [CommonModule, LoadersModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
