import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TranslateHandlerService } from './service';

function initializeAppLangFactory(service: TranslateHandlerService): () => void {
  return () => service.init();
}

function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [CommonModule, HttpClientModule, TranslateModule],
  providers: [TranslateHandlerService],
  exports: [TranslateModule],
})
export class TranslateConfigModule {
  static forRoot(): ModuleWithProviders<TranslateConfigModule> {
    return {
      ngModule: TranslateConfigModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: initializeAppLangFactory,
          deps: [TranslateHandlerService],
          multi: true,
        },
        ...(TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
          },
        } as TranslateModuleConfig).providers as Provider[]),
      ],
    };
  }
}
