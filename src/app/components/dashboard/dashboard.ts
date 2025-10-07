import { Component } from '@angular/core';
import { ResetInput } from "../../../../projects/lib/src/reset-input/reset-input";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
    standalone: true,
    imports: [ResetInput]
})
export class Dashboard {

}
