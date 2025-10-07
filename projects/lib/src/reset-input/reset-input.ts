import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-reset-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-input.html',
  styleUrl: './reset-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ResetInput,
      multi: true
    }
  ]
})
export class ResetInput implements ControlValueAccessor {
  @Input() placeholder: string = '';
  _value: string = '';

  setValue(val: string): void {
    this._value = val;

    // MAJ cycle de vie du formulaire
    this.onChange(this._value);
    this.onTouched();
  }

  getValue(): string {
    return this._value;
  }

  // RESET

  onReset(): void {
    this._value = '';
    this.onChange(this._value);
    this.onTouched();
  }

  // ControlValueAccessor

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: string): void {
    console.log('writeValue', value);
    this._value = value;
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange');
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('setDisabledState', isDisabled);
  }
}
