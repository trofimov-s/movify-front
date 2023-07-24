import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ColorSchemaModule } from '@movify/color-schema';
import { LocalStorageModule } from '@movify/local-storage';
import { TranslateConfigModule } from '@movify/translate';
import { IconModule } from '@movify/shared/icon';
import { HomePageEffects, reducers } from './store';
import { TokenInterceptorService } from './interceptor';

export const effects = [HomePageEffects];

@NgModule({
  imports: [
    CommonModule,
    ColorSchemaModule,
    LocalStorageModule,
    TranslateConfigModule,
    IconModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    HttpClientModule,
  ],
  exports: [TranslateConfigModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptorService,
    },
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...TranslateConfigModule.forRoot().providers,
        ...ColorSchemaModule.forRoot().providers,
        ...IconModule.forRoot().providers,
      ],
    };
  }
}
