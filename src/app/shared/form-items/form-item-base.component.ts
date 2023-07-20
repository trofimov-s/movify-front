import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-item-base',
  template: '',
})
export class FormItemBaseComponent<T = string> implements ControlValueAccessor {
  @Input()
  parentForm: FormGroup;

  @Input()
  fieldName: string;

  @Input()
  label: string;

  @Input()
  id: string;

  @Input()
  isDisabled: boolean;

  @Input()
  extendClass: string;

  @Input()
  placeholder = '';

  @Input()
  type: 'text' | 'password' = 'text';

  value: T;
  changed: (value: T) => void;
  touched: () => void;
  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  writeValue(value: T): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  protected onChanged(event: Event): void {
    // this.value is of string type! If this.value is of a different type,
    // then 'onChanged' method is overwritten in the child component!
    (this.value as unknown as string) = (<HTMLInputElement>event.target).value;
    this.changed(this.value);
  }
}
