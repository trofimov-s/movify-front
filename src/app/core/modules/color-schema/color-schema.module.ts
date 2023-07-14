import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorSchemaService } from './service';

@NgModule({
  imports: [CommonModule],
  providers: [ColorSchemaService],
})
export class ColorSchemaModule {}
