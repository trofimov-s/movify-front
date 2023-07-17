import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from './modules';
import { LayoutComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, HeaderModule, RouterModule],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
