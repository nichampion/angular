import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ResetInput } from '../reset-input/reset-input';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [ReactiveFormsModule, ResetInput],
  templateUrl: './address.html',
  styleUrl: './address.css'
})
export class Address {
  authorAddressForm = new FormGroup({
    number: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^\d{2,}$/) // Au moins 2 chiffres
    ]),
    street: new FormControl<string>(''),
    postalCode: new FormControl<string>(''),
    city: new FormControl<string>(''),
    country: new FormControl<string>('', [Validators.required])
  });

  constructor() {
    this.authorAddressForm.valueChanges.subscribe((value) => {
      console.log('Nouvelle adresse:', value);
    });
  }
}
