import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ColorSchemaEnum } from '../enum';
import { LocalStorageHandlerService, LocalStorageKeys } from '@movify/local-storage';
import { BehaviorSubject, Observable, filter } from 'rxjs';

@Injectable()
export class ColorSchemaService {
  private _schema$ = new BehaviorSubject<ColorSchemaEnum>(null);
  private htmlElClassList: DOMTokenList = this.document.documentElement.classList;

  get shema$(): Observable<ColorSchemaEnum> {
    return this._schema$.asObservable().pipe(filter(Boolean));
  }

  private get preferredColorScheme(): ColorSchemaEnum {
    const scheme = this.localStorageHandler.getData<ColorSchemaEnum>(LocalStorageKeys.COLOR_SCHEMA);

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
    this._schema$.next(this.preferredColorScheme);

    if (this._schema$.getValue() === ColorSchemaEnum.DARK) {
      this.htmlElClassList.add(this._schema$.getValue());
    }

    this.setSchemeToLocalStorage();
  }

  changeColorSchema(): void {
    this.htmlElClassList.toggle(ColorSchemaEnum.DARK);

    this._schema$.next(
      this._schema$.getValue() === ColorSchemaEnum.LIGHT
        ? ColorSchemaEnum.DARK
        : ColorSchemaEnum.LIGHT
    );

    this.setSchemeToLocalStorage();
  }

  private setSchemeToLocalStorage(): void {
    this.localStorageHandler.setData(LocalStorageKeys.COLOR_SCHEMA, this._schema$.getValue());
  }
}
