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
  @Input() placeholder = '';
  
value: string = '';

  onInputChange(event: any): void {
    this.value = event.target.value;

    // MAJ cycle de vie du formulaire
    this.onChange(this.value);
    this.onTouched();
  }

  reset(): void {
    this.value = '';
    this.onChange(this.value);
    this.onTouched();
  }

  // ControlValueAccessor

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
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
