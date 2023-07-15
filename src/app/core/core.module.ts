import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ColorSchemaModule } from '@movify/color-schema';
import { LocalStorageModule } from '@movify/local-storage';
import { TranslateConfigModule } from '@movify/translate';

@NgModule({
  imports: [CommonModule, ColorSchemaModule, LocalStorageModule, TranslateConfigModule],
  exports: [TranslateConfigModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...TranslateConfigModule.forRoot().providers, ...ColorSchemaModule.forRoot().providers],
    };
  }
}
