import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { ColorSchemaSwitcherComponent, HeaderComponent, LanguageComponent } from './components';
import { LogoModule } from '@movify/shared/logo';
import { IconModule } from '@movify/shared/icon';
import { AuthModule } from '@movify/auth';
import { DropdownModule } from '@movify/shared/dropdown';

@NgModule({
  imports: [
    CommonModule,
    LogoModule,
    MatSlideToggleModule,
    FormsModule,
    IconModule,
    AuthModule,
    DropdownModule,
  ],
  declarations: [HeaderComponent, ColorSchemaSwitcherComponent, LanguageComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
