import { Component } from '@angular/core';

import { MakeProvider } from '@movify/core/functions';
import { FormItemBaseComponent } from '../form-item-base.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  // styleUrls: ['./input.component.scss'],
  providers: [MakeProvider(InputComponent)],
})
export class InputComponent extends FormItemBaseComponent {}
