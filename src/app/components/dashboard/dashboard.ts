import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ResetInput } from "../../../../projects/lib/src/reset-input/reset-input";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
    standalone: true,
    imports: [ResetInput, ReactiveFormsModule]
})
export class Dashboard {
    formControl = new FormControl('');
}
