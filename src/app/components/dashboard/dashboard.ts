import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Address } from '../../../../projects/lib/src/address/address';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
    standalone: true,
    imports: [ReactiveFormsModule, Address]
})
export class Dashboard {
    formControl = new FormControl('');
    
    constructor() {
        this.formControl.valueChanges.subscribe(value => {
            console.log('Nouvelle marque de véhicule:', value);
        });
    }
}
