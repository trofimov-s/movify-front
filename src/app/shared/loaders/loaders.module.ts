import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CircleLoaderComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [CircleLoaderComponent],
  exports: [CircleLoaderComponent],
})
export class LoadersModule {}
