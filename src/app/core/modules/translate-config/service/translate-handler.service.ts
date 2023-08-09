import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { BehaviorSubject, Observable, filter, take } from 'rxjs';

import { AppLanguage } from '../enum';
import { LocalStorageHandlerService, LocalStorageKeys } from '@movify/local-storage';

@Injectable()
export class TranslateHandlerService {
  private supportLanguages = Object.values(AppLanguage);
  private _currentLang$ = new BehaviorSubject<AppLanguage>(null);

  get currentLang$(): Observable<AppLanguage> {
    return this._currentLang$.asObservable().pipe(filter(Boolean));
  }

  private get browserLang(): AppLanguage {
    return this.translateService.getBrowserLang() as AppLanguage;
  }

  get changeLangListener(): Observable<LangChangeEvent> {
    return this.translateService.onLangChange.pipe(take(1));
  }

  constructor(
    private translateService: TranslateService,
    private localStorageHandler: LocalStorageHandlerService
  ) {}

  init(): void {
    const preferredLang = this.localStorageHandler.getData<AppLanguage>(LocalStorageKeys.LANG);

    if (preferredLang) {
      this.translateService.use(preferredLang);
      this._currentLang$.next(preferredLang);
    } else if (this.browserLang && this.supportLanguages.includes(this.browserLang)) {
      this.translateService.use(this.browserLang);
      this.updateStorage(this.browserLang);
    } else {
      this.translateService.use(AppLanguage.EN);
      this.updateStorage(AppLanguage.EN);
    }
  }

  changeLanguage(lang: AppLanguage): void {
    if (this._currentLang$.getValue() === lang) {
      return;
    }

    this.translateService.use(lang);
    this.updateStorage(lang);
  }

  private updateStorage(lang: AppLanguage): void {
    this._currentLang$.next(lang);
    this.localStorageHandler.setData(LocalStorageKeys.LANG, lang);
  }
}
