import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorSchemaModule } from '@movify/color-schema';
import { LocalStorageModule } from '@movify/local-storage';

@NgModule({
  imports: [CommonModule, ColorSchemaModule, LocalStorageModule],
})
export class CoreModule {}
