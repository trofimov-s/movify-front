import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoComponent } from './components';
import { IconModule } from '@movify/shared/icon';

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [LogoComponent],
  exports: [LogoComponent],
})
export class LogoModule {}
