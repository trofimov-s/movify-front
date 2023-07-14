import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LocalStorageHandlerService } from './service';

@NgModule({
  imports: [CommonModule],
  providers: [LocalStorageHandlerService],
})
export class LocalStorageModule {}
