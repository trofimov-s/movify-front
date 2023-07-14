import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ColorSchemaEnum } from '../enum';
import { LocalStorageHandlerService, LocalStorageKeys } from '@movify/local-storage';

@Injectable()
export class ColorSchemaService {
  private schema: ColorSchemaEnum;
  private htmlElClassList: DOMTokenList = this.document.documentElement.classList;

  private get preferredColorScheme(): ColorSchemaEnum {
    const scheme = this.localStorageHandler.getData(LocalStorageKeys.COLOR_SCHEMA) as ColorSchemaEnum;

    if (scheme) {
      return scheme;
    }

    if (window.matchMedia) {
      return window.matchMedia(`(prefers-color-scheme: ${ColorSchemaEnum.DARK})`).matches
        ? ColorSchemaEnum.DARK
        : ColorSchemaEnum.LIGHT;
    }

    return ColorSchemaEnum.LIGHT;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localStorageHandler: LocalStorageHandlerService
  ) {}

  initColorSchema(): void {
    this.schema = this.preferredColorScheme;

    if (this.schema === ColorSchemaEnum.DARK) {
      this.htmlElClassList.add(this.schema);
    }

    this.setSchemeToLocalStorage();
  }

  changeColorSchema(): void {
    this.htmlElClassList.toggle(ColorSchemaEnum.DARK);

    this.schema = this.schema === ColorSchemaEnum.LIGHT ? ColorSchemaEnum.DARK : ColorSchemaEnum.LIGHT;

    this.setSchemeToLocalStorage();
  }

  private setSchemeToLocalStorage(): void {
    this.localStorageHandler.setData(LocalStorageKeys.COLOR_SCHEMA, this.schema);
  }
}
