import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { ColorSchemaService } from './service';

function initializeAppColorSchemaFactory(service: ColorSchemaService): () => void {
  return () => service.initColorSchema();
}

@NgModule({
  imports: [CommonModule],
  providers: [ColorSchemaService],
})
export class ColorSchemaModule {
  static forRoot(): ModuleWithProviders<ColorSchemaModule> {
    return {
      ngModule: ColorSchemaModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: initializeAppColorSchemaFactory,
          deps: [ColorSchemaService],
          multi: true,
        },
      ],
    };
  }
}
