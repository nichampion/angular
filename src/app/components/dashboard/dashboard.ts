import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ResetInput } from "../../../../projects/lib/src/reset-input/reset-input";
import { AuthorAddress } from '../../models/Author';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
    standalone: true,
    imports: [ResetInput, ReactiveFormsModule]
})
export class Dashboard {
    formControl = new FormControl('');
    
    // Définition du type correct pour le formulaire
    authorAddressForm = new FormGroup({
        number: new FormControl<string>(''),
        street: new FormControl<string>(''),
        postalCode: new FormControl<string>(''),
        city: new FormControl<string>(''),
        country: new FormControl<string>('')
    });

    constructor() {
        this.formControl.valueChanges.subscribe(value => {
            console.log('Nouvelle marque de véhicule:', value);
        });

        this.authorAddressForm.valueChanges.subscribe((value) => {
            console.log('Nouvelle adresse:', value);
        });
    }
}
