import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components';
import { RouterModule, Routes } from '@angular/router';
import { HomePageHandlerService } from './service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
  providers: [HomePageHandlerService],
})
export class HomeModule {}
