import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppLanguage, TranslateHandlerService } from '@movify/translate';
import { DropdownModel } from '@movify/shared/dropdown';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageComponent {
  localeMenu: DropdownModel = {
    icon: 'globe',
    dropdownMenu: [
      {
        text: this.buildTranslationKey('en'),
        action: (): void => this.translateHandler.changeLanguage(AppLanguage.EN),
        customIcon: 'GB',
      },
      {
        text: this.buildTranslationKey('ua'),
        action: (): void => this.translateHandler.changeLanguage(AppLanguage.UK),
        customIcon: 'UA',
      },
    ],
  };

  constructor(private translateHandler: TranslateHandlerService) {}

  private buildTranslationKey(path: string): string {
    return `header.locale.${path}`;
  }
}
